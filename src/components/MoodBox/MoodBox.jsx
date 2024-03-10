import './MoodBox.scss';
import happy from '../../assets/mood/happy.png';
import angry from '../../assets/mood/angry.png';
import sad from '../../assets/mood/sad.png';
import calm from '../../assets/mood/calm.png';
import fearful from '../../assets/mood/fearful.png';
import insightful from '../../assets/mood/insightful.png';
import thinking from '../../assets/mood/thinking.png';

function MoodBox({ mood, setMood, isTodaySelected }) {
    const imgs = {
        happy,
        angry,
        sad,
        calm,
        fearful,
        insightful,
        thinking
    };

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    const getTodayMood = () => {
        const moods = Object.keys(imgs);
        const randomMood = moods[Math.floor(Math.random() * (moods.length - 1))]; //exclude thinking
        console.log(randomMood)
        setMood(randomMood);
    }


    return (
        <div className="moodbox">
            <h2>The Day's Mood</h2>
            <div className='moodbox__img-box'>
                <img className="moodbox__img" src={imgs[mood]} alt={`${mood} mood icon`} />
            </div>
            {mood === 'thinking' ? <h3 className="moodbox__mood-title">Hmm... what is it?</h3> : <h3 className="moodbox__mood-title">- {toTitleCase(mood)} -</h3>}

            {isTodaySelected && mood === 'thinking' && <button className="moodbox__button" onClick={() => getTodayMood()}>Finalize and Discover Mood</button>}

        </div>
    );
}

export default MoodBox;
