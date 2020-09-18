import React from 'react';
import "./Footer.css";

function Footer(){
  return(
    <footer className="footer bg-dark">
      <div className="container">
        <div className="text-muted">All rights resrved &copy; {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}

export default Footer;
