import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      {/* <div className="logo">Health<span className="highlight">care.</span></div> */}
      <div className="search-bar">
        <input type="text" placeholder="🔍 Search" disabled />
      </div>
      <div className="header-icons">
        <button className="notification-btn" disabled><img src="https://img.icons8.com/?size=100&id=83193&format=png&color=228BE6" alt='notification'></img></button>
        
        {/* <div className="user-profile">
          <img src="/assets/avatar-placeholder.png" alt="User Avatar" />
          <span>Dr. John</span>
        </div>
        <button className="add-btn">＋</button> */}
      </div>
    </header>
  )
}

export default Header
