import './Day.scss';
import ChatBox from '../../components/ChatBox/ChatBox';
import MoodBox from '../../components/MoodBox/MoodBox';

function Day() {


    return (
        <div className='day'>
            <ChatBox />
            <MoodBox mood="happy" />
        </div>
    )
}

export default Day;