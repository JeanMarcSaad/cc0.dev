import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubmitProject from './routes/SubmitProject.jsx';
import ThankYou from './routes/ThankYou.jsx';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/submit-project" element={<SubmitProject />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  </BrowserRouter>
)
