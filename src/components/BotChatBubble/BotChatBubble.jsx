import './BotChatBubble.scss'


function BotChatBubble({ message }) {
    return (
        <>
            <div className="bot-chat-bubble">
                <h4 className="bot-chat-bubble__name">Journal bot</h4>
                <p className="bot-chat-bubble__message">{message}</p>
            </div>

        </>
    )
}

export default BotChatBubble