import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ColorHome from './ColorHome';
import AddColorForm from './AddColorForm';
import ColorDisplay from "./ColorDisplay";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='colors' element={<ColorHome />} >
            <Route path='add' element={<AddColorForm />} />
            <Route path=':name' element={<ColorDisplay/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
