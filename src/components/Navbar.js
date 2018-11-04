import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent" style={{ boxShadow: '2px 2px 2px rgba(0,0,0,0.5)', position: 'fixed', width: '100%' }}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Lightbulb" style={{ width: '35px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="#">
          Food
        </Link>
        <Link className="navbar-item" to="#">
          Make
        </Link>
        <Link className="navbar-item" to="#">
          Play
        </Link>
        <a className="navbar-item"
            href="https://code-kind.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer">
          Code
        </a>
        <Link className="navbar-item" to="#">
          Now
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
