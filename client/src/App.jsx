import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './output.css'

import {useState, useEffect} from "react";

const App = () => {

  return (
    <BrowserRouter>
      
            
                <div className="min-h-screen">
                  <div className="gradient-bg-welcome">
                    <Navbar />
                      {/**
                      <Services />
                      <Footer />
                      **/}
                  </div>
                </div>

    </BrowserRouter>

  )
}

export default App