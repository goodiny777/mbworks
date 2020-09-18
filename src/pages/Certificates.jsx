import React from 'react';
import "./Certificates.css";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import cert_html from '../assets/certificates/cert_html.jpg';
import cert_css from '../assets/certificates/cert_css.jpg';
import cert_js from '../assets/certificates/cert_js.jpg';
import cert_java from '../assets/certificates/cert_java.jpg';
import cert_sql from '../assets/certificates/cert_sql.jpg';
import cert_jquery from '../assets/certificates/cert_jquery.jpg';
import cert_hg_schoole from '../assets/certificates/highschool.jpg';
import cert_hackeru from '../assets/certificates/cert_hackeru.jpg';
import ibm_hackaton from '../assets/certificates/ibm_hackaton.jpeg';
import cert_node_js from '../assets/certificates/cert_node_js.png';
import cert_helsinki_ai from '../assets/certificates/certificate_elements_of_ai.png';
import cert_analitics from '../assets/certificates/cert_analitics.jpg';


function Certificates(){
  return(
    <div className="bg-dark">
      <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col"/>
            <div className="col">
              <img className="img-fluid rounded" src={cert_hackeru} alt="No img"/>
            </div>
            <div className="col">
              <img className="img-fluid rounded" src={ibm_hackaton} alt="No img"/>
            </div>
            <div className="col">
              <img className="img-fluid rounded" src={cert_hg_schoole} alt="No img"/>
            </div>
            <div className="col"/>
          </div>
          <div className="row">
            <div className="col"/>
            <div className="col">
              <img className="img-fluid rounded" src={cert_helsinki_ai} alt="No img"/>
            </div>
            <div className="col">
              <img className="img-fluid rounded" src={cert_node_js} alt="No img"/>
            </div>
            <div className="col">
              <img className="img-fluid rounded" src={cert_analitics} alt="No img"/>
            </div>
            <div className="col"/>
          </div>
          <div className="row">
            <div className="col"/>
            <div className="col">
              <img className="img-fluid rounded" role="presentation" src={cert_html} alt="No img"/>
            </div>
            <div className="col">
              <img className="img-fluid rounded" src={cert_css} alt="No img"/>
            </div>
            <div className="col">
              <img className="img-fluid rounded" src={cert_js} alt="No img"/>
            </div>
            <div className="col"/>
          </div>
          <div className="row">
            <div className="col"/>
            <div className="col">
              <img className="img-fluid rounded" src={cert_java} alt="No img"/>
            </div>
            <div className="col">
              <img className="img-fluid rounded" src={cert_sql} alt="No img"/>
            </div>
            <div className="col">
              <img className="img-fluid rounded" src={cert_jquery} alt="No img"/>
            </div>
            <div className="col"/>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Certificates;
