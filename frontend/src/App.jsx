import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'



const App = () => {
  return (
    <div className='relative min-h-screen w-full'>
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-base-100 to-base-100" />
  
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}
  
export default App