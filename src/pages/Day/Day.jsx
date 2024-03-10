import './Day.scss';
import ChatBox from '../../components/ChatBox/ChatBox';
import { useState } from 'react';

function Day({ isSideBarOpen }) {

    return (
        <ChatBox isSideBarOpen={isSideBarOpen} />
    )
}

export default Day;