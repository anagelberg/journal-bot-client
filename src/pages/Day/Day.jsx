import './Day.scss';
import ChatBox from '../../components/ChatBox/ChatBox';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Day({ isSideBarOpen, setIsTodaySelected, isTodaySelected, dates, setSelectedDate }) {

    const { date } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        if (date === currentDate) {
            setIsTodaySelected(true);
        } else if (!date) {
            navigate(`/${currentDate}`);
        } else if (!dates.includes(date)) {
            navigate(`/not-found/404`)
        } else {
            setIsTodaySelected(false);
        }
        setSelectedDate(date);
    }, [date])


    return (
        <ChatBox isSideBarOpen={isSideBarOpen} isTodaySelected={isTodaySelected} date={date} />
    )
}

export default Day;