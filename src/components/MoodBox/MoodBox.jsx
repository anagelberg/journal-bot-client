function MoodBox({ mood }) {
    //TODO: make sure moods match for all! 


    return (
        <div className="moodbox">
            <img className="moodbox__img" src={img} />
            <h2>{mood}</h2>
        </div>
    )
}

export default MoodBox;