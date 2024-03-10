import './Day.scss';
import ChatBox from '../../components/ChatBox/ChatBox';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Day({ isSideBarOpen, setIsTodaySelected, isTodaySelected }) {

    const { date } = useParams();

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        if (date === currentDate) {
            setIsTodaySelected(true);
        } else {
            setIsTodaySelected(false);
        }
    }, [date])


    return (
        <ChatBox isSideBarOpen={isSideBarOpen} isTodaySelected={isTodaySelected} />
    )
}

export default Day;