import { useEffect, useState } from 'react'
import './App.css'
import RegisterPage from './ResgisterPage.jsx'
import LoginPage from './LoginPage.jsx'
import JobListPage from './JobListPage.jsx'
import ApplyJobPage from './ApplyJobPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/jobs" element={<JobListPage />} />
     <Route path="/apply/:jobId" element={<ApplyJobPage />} />
    </Routes>
    </>
  )
}

export default App
