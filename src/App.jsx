import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdmissionsPage from './pages/AdmissionPage'
import ContactPage from './pages/ContactPage'
import ExaminationPage from './pages/ExaminationPage'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admissions" element={<AdmissionsPage />} />
    <Route path='/examination' element={<ExaminationPage />} />
    <Route path='/contact' element={<ContactPage />} />
    
  </Routes>
)

export default App;