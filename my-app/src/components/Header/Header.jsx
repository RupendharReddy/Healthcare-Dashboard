import React, { useState } from 'react'
import './Header.css'
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className='mobile-header'>
        <div className="header-logo">Health<span className="highlight">care.</span></div>
        {/* add menu icon here and handle toggling the sidebar to open <sidebar />*/}
        <div>
          <button className="notification-btn" disabled><img src="https://img.icons8.com/?size=100&id=83193&format=png&color=228BE6" alt='notification'></img></button>
          <button className="menu-toggle" onClick={toggleSidebar}>
            {isOpen ? '✕' : '☰'}
          </button>
          
        </div>
      </div>
        <div className={`${isOpen ? 'open' : ''}`}>
          {isOpen && <Sidebar isOpen={isOpen}/>}
        </div>
      <div className="search-bar">
        <input type="text" placeholder="🔍 Search" disabled />
      </div>
      <div className="header-icons">
        <button className="notification-btn" disabled><img src="https://img.icons8.com/?size=100&id=83193&format=png&color=228BE6" alt='notification'></img></button>
      </div>
    </header>
  )
}

export default Header
