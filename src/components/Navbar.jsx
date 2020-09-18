import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

import home_icon from '../assets/icons/home_icon.png';
import works_icon from '../assets/icons/works_icon.png';
import cert_icon from '../assets/icons/cert_icon.png';
import blog_icon from '../assets/icons/blog_icon.png';

function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/"><h4>Michael Babozhko</h4></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                <img alt="no-img" className="nb-img fluid ms-auto" src={home_icon}/>
                 Home <span className="sr-only">(current)</span>
                 </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                <img alt="no-img" className="nb-img fluid ms-auto" src={blog_icon}/>
                 Blog <span className="sr-only">(current)</span>
                 </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/works">
                  <img alt="no-img" className="nb-img fluid" src={works_icon}/>
                Works <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/certificates">
                  <img alt="no-img" className="nb-img fluid" src={cert_icon}/>
                Certificates <span className="sr-only">(current)</span>
                </Link>
              </li>

            </ul>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
