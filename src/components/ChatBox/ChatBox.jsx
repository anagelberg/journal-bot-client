import { useState, useEffect } from "react";
import BotChatBubble from "../BotChatBubble/BotChatBubble";
import UserChatBubble from "../UserChatBubble/UserChatBubble";
import JournalEntry from "../JournalEntry/JournalEntry";
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import './ChatBox.scss';
import axios from "axios";

function ChatBox() {
    //TODO: improve the enter key functionality for better UI

    const [entryText, setEntryText] = useState("");
    const [messages, setMessages] = useState([
        {
            message: "Hello, how are you feeling today?",
            role: "CHATBOT",
        }
    ]);


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
        <div className="chatbox">
            <div>
                {
                    messages.map((message, index) => {
                        if (message.role === "CHATBOT") {
                            return <BotChatBubble key={index} message={message.message} />
                        } else {
                            return <UserChatBubble key={index} message={message.message} />
                        }
                    })
                }
            </div>

            <form className="add-entry-form" onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted");
                handleAddEntry(entryText)
                setEntryText("")
            }
            }>
                <JournalEntry entryText={entryText} setEntryText={setEntryText} />
                <button type="submit" className="add-entry-form__button">
                    <SendIcon className="add-entry-form__button-icon" />
                </button>


            </form>
        </div>
    )
}

export default ChatBox;