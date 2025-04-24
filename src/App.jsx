import React from 'react'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <>
      <div className='flex'> 
        <SideBar />
        <MainContent />
      </div>
    </>
  )
}

export default App
