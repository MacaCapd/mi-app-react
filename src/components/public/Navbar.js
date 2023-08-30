//rafc 
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body align-items-center justify-content-center" data-bs-theme="dark">
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <span><img className="App-logo" height="52" src="logo.png" alt="" /></span>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="/features" className="nav-link px-2 text-white">Features</a></li>
              <li><a href="/pricing" className="nav-link px-2 text-white">Pricing</a></li>
              <li><a href="/faqs" className="nav-link px-2 text-white">FAQs</a></li>
              <li><a href="/about" className="nav-link px-2 text-white">About</a></li>
              <li><Link to='/user-form' className="nav-link px-2 text-white">FORMULARIO</Link></li>
              
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <div>
                <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
              </div>

            </form>

            <div className="text-end">
              <div><button type="button" className="btn btn-outline-light me-2">Login</button>    <button type="button" className="btn btn-success">Sign-up</button></div>

            </div>
          </div>
        </div>
      </header>
    </nav>
  )
}

export default Navbar