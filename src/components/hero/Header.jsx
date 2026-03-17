import React, { useState } from "react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleClick = () => {
      alert('Feature not added in this demo.');
  }

  return (
    <header>
      <img className="logo" src="/Logo.svg" alt="logo"/>
      <div className={`navigation ${isMenuOpen ? 'active' : ''}`}>
        <nav className="headerNavs">
          <a>Home</a>
          <a>About</a>
          <a>Blog</a>
          <a>Pages</a>
          <a>Contact</a>
        </nav>
        <div className="headerButtonsContainer">
          <button className="headerButtons" onClick={handleClick} id="signInButton" type="button">Sign in</button>
          <button className="headerButtons" onClick={handleClick} id="signUpButton" type="button">Get Started Free</button>
        </div>
      </div>
      <button 
        type="button"  
        className="menu-button" 
        aria-label="Toggle navigation menu"
        onClick={toggleMenu}
      >
        <img 
          id="menu-icon" 
          src={isMenuOpen? "/icons8-close.svg" : "/icons8-menu.svg"}
          alt="Menu icon"
        />
      </button>
    </header>
  )
}