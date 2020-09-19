import React from 'react';
import "./Works.css"
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import karmaLogo from '../assets/karma_logo.png';
import spaDreamLogo from '../assets/ds_logo.png';
import weekupLogo from '../assets/weekup_logo.jpg';

function Works(){
  return(
    <div className="bg-dark">
      <Navbar/>
      <div className="container rounded bg-light">
          <div className="row container">
              <div className="col container">
                <img src={weekupLogo} alt="weekup_logo" width="100" heigh="100"/>
              </div>
              <div className="col container">
                <h5>
                  <a href="https://play.google.com/store/apps/details?id=com.weekup">WeekUp</a>
                </h5>
              </div>
              <div className="row container">
                <p>
                Weekup I made as freelancer.<br/>
                In this project I managed all the tecnology side.<br/>
                From choosing data base and libraries to rulling worktime and supplying th customer with techncal advices.
                </p>
            </div>
          </div>
      </div>
      <hr className="divider"/>
        <div className="container rounded bg-light">
          <div className="row container">
            <div className="col container">
                <img src={karmaLogo} alt="karma_logo" width="100" heigh="100"/>
            </div>
            <div className="col container">
              <h5>
                <a href="https://play.google.com/store/apps/details?id=tk.mbworks.www.karma">Karma</a>
              </h5>
            </div>
            <div className="row container">
              <p>
                Android application.<br/>
                Made with Kotlin and Realm.io<br/>
                My own idea that should help to people to save their good
                and not good deeds and always be informed about the state of karma.
              </p>
            </div>
          </div>
        </div>
        <hr className="divider"/>
        <div className="container rounded bg-light">
          <div className="row container">
              <div className="col container">
              <img src={spaDreamLogo} alt="spa_dream" width="100" heigh="100"/>
              </div>
              <div className="col container">
                <h5>
                  <a href="https://play.google.com/store/apps/details?id=il.co.spadream.spadream">SpaDream</a>
                </h5>
              </div>
              <div className="row container">
                <p>
                Project for my friend's buisness<br />It is simple web view but makes simple my customer to reach his clients<br/>
                by sending to them push notifications.<br/>
                Also it is good stategy to put your buisness page or app to be always in eyes of customers. 
                </p>
              </div>
            </div>
          </div>

    <Footer/>
    </div>
  );
}

export default Works;
