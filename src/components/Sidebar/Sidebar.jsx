import MoodBox from "../MoodBox/MoodBox";
import { useState } from 'react';
import './Sidebar.scss';
import { ReactComponent as CloseX } from '../../assets/icons/closeX.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';

function Sidebar({ isOpen, setIsOpen }) {
    const [mood, setMood] = useState('insightful');

    if (isOpen) {
        return (
            <div className='sidebar'>
                <CloseX className='sidebar__closeX' onClick={() => setIsOpen(false)} />
                <MoodBox mood={mood} setMood={setMood} />
            </div>
        )
    } else {
        return <Hamburger className='sidebar__hamburger' onClick={() => setIsOpen(true)} />;
    }


}

export default Sidebar;