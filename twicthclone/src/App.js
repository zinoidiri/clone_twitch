import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/Sidebar'
import Games from './components/Games/Games'
import TopStreams from './components/TopStreams/TopStream';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Live from './components/Live/live';

function App() {
  return (
    
    <Router>
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Games />} />
        <Route exact path="/top-streams" element={<TopStreams />} />
        <Route exact path="/live/:slug" element={<Live />} />
      </Routes>

      
    </div>
    </Router>
  );
}

export default App;
