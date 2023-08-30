//rafc 
import React, { useState } from 'react'

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

          <span onClick={handleClick} ><img className="App-logo" heigth="52" src="logo.png" alt="logo-giratorio"></img></span>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="www.google.com" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="www.google.com" className="nav-link px-2 text-body-secondary">Features</a></li>
            <li className="nav-item"><a href="www.google.com" className="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li className="nav-item"><a href="www.google.com" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li className="nav-item"><a href="www.google.com" className="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
        </footer>
      </div>
  )
}
export default Footer
