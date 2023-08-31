//rafc 
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  const [clicks, setClicks] = useState(0);

  const year = new Date().getFullYear();
  const companyName = "MACARENA CAPDEVILA COMPANY ✔️";

  const handleClick = () => {
    console.log("Holis desde el handleClick");
    setClicks(clicks + 1);
  }

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

        <p className="col-md-4 mb-0 text-body-secondary">&copy; {year} {companyName} CLICKS= {clicks} ✔️</p>

        <div className="mx-auto p-2" ><span className="justify-content-end" onClick={handleClick}><img className="App-logo" heigth="52" src="logo.png" alt="logo-giratorio"></img></span></div>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><Link to='/' className="nav-link px-2 text-body-secondary">Home</Link></li>
          <li className="nav-item"><Link to='/features' className="nav-link px-2 text-body-secondary">Features</Link></li>
          <li className="nav-item"><Link to='/faqs' className="nav-link px-2 text-body-secondary">FAQs</Link></li>
          <li className="nav-item"><Link to='/about' className="nav-link px-2 text-body-secondary">About</Link></li>
          <li className="nav-item"><Link to='/contact' className="nav-link px-2 text-body-secondary">Contact</Link></li>
        </ul>
      </footer>
    </div>
  )
}
export default Footer
