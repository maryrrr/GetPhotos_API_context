import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomeApp from './views/HomeApp/HomeApp';


function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeApp />} />
            
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
