import React from 'react'
// import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/Dashboard/DashboardMainContent'
import './styles/global.css'

const App = () => {
  return (
    <div className="app-container">
      <Sidebar isOpen={false}/>
      <div className="main-area">
        {/* <Header /> */}
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
