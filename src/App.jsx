import './style/App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Destinations from './pages/Destinations';
import Questionnaire from './pages/Questionnaire';
import Reservation from './pages/Reservation';
import Vaisseaux from './pages/Vaisseaux';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Destinations />
      <Questionnaire />
      <Reservation />
      <Vaisseaux />
      <Contact />
    </div>
  );
}

export default App;
