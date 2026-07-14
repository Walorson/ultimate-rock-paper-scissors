//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import MainMenu from './components/MainMenu'
import ClassicGamemode from './gamemodes/ClassicGamemode'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainMenu />}/>
      <Route path='classic' element={<ClassicGamemode />}/>
    </Routes>
  </BrowserRouter>
)
