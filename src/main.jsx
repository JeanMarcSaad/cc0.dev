import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubmitProject from './routes/SubmitProject';
import ThankYou from './routes/ThankYou';
import Structure from './pages/Structure';
// import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Structure />} />
      <Route path="/project/:project_id" element={<Structure />} />
      <Route path="/submit-project" element={<SubmitProject />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  </BrowserRouter>
)
