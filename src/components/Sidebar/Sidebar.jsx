import MoodBox from "../MoodBox/MoodBox";
import { useState, useEffect } from 'react';
import './Sidebar.scss';
import { ReactComponent as CloseX } from '../../assets/icons/closeX.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';
import { NavLink } from "react-router-dom";


function Sidebar({ isOpen, setIsOpen, isTodaySelected }) {
    const [mood, setMood] = useState('thinking');

    // get these from the api
    const [dates, setDates] = useState(['2024-03-09', '2024-03-01', '2024-02-29', '2024-02-20', '2024-01-30', '2024-01-12', '2024-01-11', '2024-01-01']);


    function formatReadableDate(dateString) {

        const dateWithLocalTime = new Date(dateString + 'T00:00');

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (dateWithLocalTime.getTime() === today.getTime()) {
            return "Today";
        } else if (dateWithLocalTime.getTime() === yesterday.getTime()) {
            return "Yesterday";
        }

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const humanReadable = dateWithLocalTime.toLocaleDateString('en-US', options);

        return humanReadable;
    }

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];

        if (!dates.includes(currentDate)) {
            setDates([currentDate, ...dates]);
        }
    }, [dates]);



    if (isOpen) {
        return (
            <div className='sidebar'>
                <CloseX className='sidebar__closeX' onClick={() => setIsOpen(false)} />
                <MoodBox mood={mood} setMood={setMood} isTodaySelected={isTodaySelected} />

                <div className='sidebar__dates'>
                    <h2>More Journal Entries</h2>
                    {dates.map((date, index) => {
                        return (
                            <NavLink
                                className="sidebar__date-link"
                                to={`${date}`}
                                onClick={() => window.innerWidth <= 767 && setIsOpen(false)}
                            >
                                <p className="sidebar__link-text">{formatReadableDate(date)}</p>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return <Hamburger className='sidebar__hamburger' onClick={() => setIsOpen(true)} />;
    }


}

export default Sidebar;