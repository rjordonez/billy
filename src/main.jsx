import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Story from './components/Story.jsx'
import Transactions from './components/Transactions.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/story" element={<Story />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
