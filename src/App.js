import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import SelectedPage from './Components/SelectedPage/SelectedPage';


const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SelectedPage" element={<SelectedPage />} />
          </Routes>
        </BrowserRouter>
      </div>


    </>
  )
}

export default App