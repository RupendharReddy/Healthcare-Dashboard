import { useState } from 'react'
import './Header.css'
import Sidebar from '../Sidebar/Sidebar';

// Header component for the responsive navigation bar
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      {/* Mobile Header */}
      <div className='mobile-header'>
        <div className="header-logo">Health<span className="highlight">care.</span></div>
        <div>
          <button className="notification-btn" disabled>
            {/* <img src="https://img.icons8.com/?size=100&id=83193&format=png&color=228BE6" alt='notification'></img> */}
            <img src="http://www.w3.org/2000/svg" alt='notification'></img>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg> */}
            </button>
          <button className="menu-toggle" onClick={toggleSidebar}>
            {isOpen ? '✕' : '☰'}
          </button>

        </div>
      </div>
      {/* Desktop Header */}
      <div className={`${isOpen ? 'open' : ''}`}>
        {isOpen && <Sidebar isOpen={isOpen} />}
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
