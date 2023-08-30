import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalState"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomeApp from './views/HomeApp/HomeApp'


function App() {
  
  return (
    
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<HomeApp />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
    
  )
}

export default App
