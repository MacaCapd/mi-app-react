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

              <li><Link to='/' className="nav-link px-2 text-white">Home</Link></li>
              <li><Link to='/features' className="nav-link px-2 text-white">Features</Link></li>
              <li><Link to='/faqs' className="nav-link px-2 text-white">FaQs</Link></li>
              <li><Link to='/about' className="nav-link px-2 text-white">About</Link></li>
              <li><Link to='/contact' className="nav-link px-2 text-white">Contact</Link></li>

            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <div>
                <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
              </div>

            </form>

            <div className="text-end">
              <div><Link to='/login' type="button" className="btn btn-outline-light me-2">Login</Link>    <Link to="/sign-up" type="button" className="btn btn-success">Sign-up</Link></div>

            </div>
          </div>
        </div>
      </header>
    </nav>
  )
}

export default Navbar