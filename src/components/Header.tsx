import React, { useState } from 'react'
import './Header.css'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo">
              <span className="logo-icon">🐾</span>
              <span className="logo-text">NutriPaws Premium</span>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#products" className="nav-link">Products</a></li>
              <li><a href="#newsletter" className="nav-link">Newsletter</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header