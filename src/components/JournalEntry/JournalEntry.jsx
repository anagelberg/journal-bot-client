import './JournalEntry.scss';

function JournalEntry({ setEntryText,
    entryText }) {
    return (
        <div className="journal-entry">
            <textarea className="journal-entry__field" name="" id="" cols="30" rows="3" placeholder='Your journal entry...'
                value={entryText}
                onChange={(e) => {
                    setEntryText(e.target.value)
                }}
            >

            </textarea>
        </div>
    )
}

export default JournalEntry;