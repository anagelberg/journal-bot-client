import React, { useEffect, useState } from 'react';
import ChatBox from './components/ChatBox/ChatBox';
import './App.scss';

function App() {
  return (
    <div className="app">
      <h1 className='app__title'>Journal GPT</h1>
      <ChatBox />
    </div>
  );
}

export default App;
// 5 emotions: anger, anticipation, joy, sadness, trust, disgust, fear, surprise
