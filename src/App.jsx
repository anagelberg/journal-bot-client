import React, { useEffect, useState } from 'react';

import Day from './pages/Day/Day';
import './App.scss';

function App() {
  return (
    <div className="app">
      <h1 className='app__title'>Journal GPT</h1>
      <div className='app__day'>
        {/* Routes go here */}
        <Day />
      </div>

    </div>
  );
}

export default App;
// 5 emotions: anger, anticipation, joy, sadness, trust, disgust, fear, surprise
