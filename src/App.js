/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Interpretes } from './interpretes/Interpretes';
import { Albunes } from './albuns/Albuns';
import { ArtistDetails } from './interpretes/components/ArtistDetails';
import { ArtistDiscografy } from './interpretes/components/ArtistDiscografy';
import { GeneralProvider } from './ContextApi/generalContext';

function App() {
  return (
      <GeneralProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/interpretes" element={<Interpretes/>} />
            <Route exact path="/interpretes/:id" element={<ArtistDetails/>} />
            <Route exact path="/interpretes/discografy/:id" element={<ArtistDiscografy/>} />
            <Route exact path="/albums" element={<Albunes/>} />
            <Route exact path="/generos" element={<Home/>} />
            <Route exact path="/playList" element={<Home/>} />
          </Routes>
        </Router>
      </GeneralProvider>
  );
}

export default App;
