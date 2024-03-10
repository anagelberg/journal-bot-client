import { useState, useEffect } from "react";
import BotChatBubble from "../BotChatBubble/BotChatBubble";
import UserChatBubble from "../UserChatBubble/UserChatBubble";
import JournalEntry from "../JournalEntry/JournalEntry";
// import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';


function ChatBox() {


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

    useEffect(() => {
        console.log("Changed Entry text: ", entryText)
    }, [entryText])


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
        <>
            {
                messages.map(message => {
                    if (message.role === "CHATBOT") {
                        return <BotChatBubble message={message.message} />
                    } else {
                        return <UserChatBubble message={message.message} />
                    }
                })
            }

            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted");
                handleAddEntry(entryText)
                setEntryText("")
            }
            }>
                <JournalEntry entryText={entryText} setEntryText={setEntryText} />
                <button type="submit">Add entry</button>
            </form>
        </>
    )
}

export default ChatBox;