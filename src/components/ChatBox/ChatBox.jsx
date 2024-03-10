import { useState, useEffect } from "react";
import BotChatBubble from "../BotChatBubble/BotChatBubble";
import UserChatBubble from "../UserChatBubble/UserChatBubble";
import JournalEntry from "../JournalEntry/JournalEntry";
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import './ChatBox.scss';
import axios from "axios";

function ChatBox({ isSideBarOpen, isTodaySelected, date }) {
    //TODO: improve the enter key functionality for better UI

    const [entryText, setEntryText] = useState("");
    const [messages, setMessages] = useState([
        {
            message: "Hello, how are you feeling today?",
            role: "CHATBOT",
        }
    ]);





    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        if (date && date !== currentDate) {

            const loadJsonData = async () => {
                try {
                    const fileName = `${date}.json`;
                    const response = await fetch(`/data/${fileName}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${fileName}`);
                    }
                    const jsonData = await response.json();
                    setMessages(jsonData);
                } catch (error) {
                    console.error("Error loading JSON data:", error);

                }
            };

            if (date) {
                loadJsonData();
            }

        } // else need to get persisted data oops
    }, [date]);


    const handleAddEntry = async (entryText) => {
        setMessages(prevMessages => [
            ...prevMessages,
            {
                message: entryText,
                role: "USER"
            }
        ]);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/chat`, {
                user_message: entryText
            });

            setMessages(prevMessages => [
                ...prevMessages,
                {
                    message: response.data.chatbot_response,
                    role: "CHATBOT"
                }
            ]);
        } catch (error) {
            console.error("Error in getting chatbot response:", error);
        }
    };

    return (
        <div className={`chatbox ${isSideBarOpen ? 'chatbox--sidebar-open' : "chatbox--expanded"}`}>
            <div className={`chatbox__conversation ${isTodaySelected ? '' : 'chatbox__conversation--expanded'}`}>
                {
                    messages?.map((message, index) => {
                        if (message.role === "CHATBOT") {
                            return <BotChatBubble key={index} message={message.message} />
                        } else {
                            return <UserChatBubble key={index} message={message.message} />
                        }
                    })
                }
            </div>

            {isTodaySelected &&
                <form className="add-entry-form" onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Form submitted");
                    handleAddEntry(entryText)
                }
                }>
                    <JournalEntry entryText={entryText} setEntryText={setEntryText} handleAddEntry={handleAddEntry} />
                    <button type="submit" className="add-entry-form__button">
                        <SendIcon className="add-entry-form__button-icon" />
                    </button>


                </form>
            }
        </div>
    )
}

export default ChatBox;