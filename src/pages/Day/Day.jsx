import './Day.scss';
import ChatBox from '../../components/ChatBox/ChatBox';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Day({ isSideBarOpen }) {

    const { date } = useParams();

    /* when date changes, also need to reload the sidebar -- placeholder */
    useEffect(() => {
        console.log(date);
    }, [date])



    return (
        <ChatBox isSideBarOpen={isSideBarOpen} />
    )
}

export default Day;