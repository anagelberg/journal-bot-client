import React, { useEffect, useState } from 'react';

import Day from './pages/Day/Day';
import NotFound from './pages/NotFound/NotFound';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isTodaySelected, setIsTodaySelected] = useState(true);

  // get these from the api
  const [dates, setDates] = useState(['2024-03-09', '2024-03-01', '2024-02-29', '2024-02-20', '2024-01-30', '2024-01-12', '2024-01-11', '2024-01-01']);

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];

    if (!dates.includes(currentDate)) {
      setDates([currentDate, ...dates]);
    }
  }, [dates]);


  return (
    <BrowserRouter>
      <div className="app">
        <h1 className='app__title'>Journal GPT</h1>
        <div className='app__day'>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isTodaySelected={isTodaySelected} dates={dates} setDates={setDates} />

          {/* Routes go here */}
          <Routes>
            <Route path='/' element={<Day isSideBarOpen={isOpen} setIsTodaySelected={setIsTodaySelected} isTodaySelected={isTodaySelected} />} />
            <Route path='/:date' element={<Day isSideBarOpen={isOpen} setIsTodaySelected={setIsTodaySelected} isTodaySelected={isTodaySelected} dates={dates} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
// 5 emotions: anger, anticipation, joy, sadness, trust, disgust, fear, surprise
