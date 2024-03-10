import React, { useEffect, useState } from 'react';

import Day from './pages/Day/Day';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="app">
      <h1 className='app__title'>Journal GPT</h1>
      <div className='app__day'>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Routes go here */}
        <Day isSideBarOpen={isOpen} />
      </div>

    </div>
  );
}

export default App;
// 5 emotions: anger, anticipation, joy, sadness, trust, disgust, fear, surprise
