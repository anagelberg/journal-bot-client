import { useState, useEffect, useRef } from "react";
import BotChatBubble from "../BotChatBubble/BotChatBubble";
import UserChatBubble from "../UserChatBubble/UserChatBubble";
import JournalEntry from "../JournalEntry/JournalEntry";
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import './ChatBox.scss';
import axios from "axios";
import loadingGif from '../../assets/messaging.gif';

function ChatBox({ isSideBarOpen, isTodaySelected, date }) {
    //TODO: improve the enter key functionality for better UI

    const [entryText, setEntryText] = useState("");
    const [messages, setMessages] = useState([
        {
            message: "Hello, how are you feeling today?",
            role: "CHATBOT",
        }
    ]);
    const [messageLoading, setMessageLoading] = useState(false);
    const scrollRef = useRef(null);



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

        setMessageLoading(true);
        setTimeout(() => {
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 100);


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

            if (response) {
                setMessageLoading(false);
                setTimeout(() => {
                    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }, 100);
            }
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
                {messageLoading && <img className="chatbox__loading" src={loadingGif} alt="response message is loading" />}
                <div ref={scrollRef}></div>
            </div>

            {isTodaySelected &&
                <form className="add-entry-form" onSubmit={(e) => {
                    e.preventDefault();
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