import { useState, useEffect } from "react";
import BotChatBubble from "../BotChatBubble/BotChatBubble";
import UserChatBubble from "../UserChatBubble/UserChatBubble";
import JournalEntry from "../JournalEntry/JournalEntry";
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import './ChatBox.scss';

function ChatBox() {
    //TODO: improve the enter key functionality for better UI

    const [entryText, setEntryText] = useState("");
    const [messages, setMessages] = useState([
        {
            message: "Hello, how are you feeling today?",
            role: "CHATBOT",
        },
        {
            message: "I'm doing okay, I guess.",
            role: "USER",
        },
        {
            message: "What could make it better?",
            role: "CHATBOT",
        },
        {
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            role: "USER",
        }
    ]);



    const handleAddEntry = (entryText) => {

        // will change to grab from the backend
        setMessages([
            ...messages,
            {
                message: entryText,
                type: "USER"
            }
        ])
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