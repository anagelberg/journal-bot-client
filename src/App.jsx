import React, { useEffect, useState } from 'react';
import ChatBox from './components/ChatBox/ChatBox';
import './App.css';

function App() {
  return (
    <>
      <h1>Journal GPT</h1>
      <ChatBox />
    </>
  );
}

export default App;
// 5 emotions: anger, anticipation, joy, sadness, trust, disgust, fear, surprise
