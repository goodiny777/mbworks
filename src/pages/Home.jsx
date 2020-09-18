import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jambotrone from '../components/Jambotron.jsx';
import telIco from '../assets/icons/telegram_icon.png';
import linIco from '../assets/icons/linkedin_icon.png';
import gitIco from '../assets/icons/git.png';



function Home() {
  return (
    <div className="bg-dark">
    <Navbar/>
    <Jambotrone/>
      <div className="container">
        <p className="color-white">
          Hey! I'm <strong>Michael</strong>. Coding has changed my world. It's not just
          about apps.
          Learning to code gave me <i>problem-solving skills </i>
          and a way to communicate with others on a technical level.
          I can also develop websites and use my coding skills to get a better job.
          I learned a basic level of my skills at <strong>leZion beRina</strong> high
          scoll in Naale programm and
          at <a href="https://www.sololearn.com/Profile/4761008">SoloLearn</a>.
          Then I improved them to advanced level at <strong> HackerU </strong>
          where I'm learnig today with a great teacher
          <a href="https://www.linkedin.com/in/zeev-mindali-580737145">Zeev Mindali</a>.
          You welcome to ask me for anything and I will try to give you the best answer
          that I can.
        </p>
        <p className="color-white">
          From August 2019 till today I work at <a href="https://www.bigapps.co.il/">Bigapps Interactive</a> as Mobile developer and take part in developing Android and iOS native apps.
          <br/>
          Also I took part in developing crosplatform app with Native Script and Angular 2.
        </p>
        <p className="color-white">
          This site is an example of my knowledge in React buildng and Bootstrap 4.
          It is hosted on GitHub Pages and uses a free domain name from Freenom.
        </p>
      </div>
      <div className="wrapper">
        <p className="mrg color-white">You can find me on</p>
          <div className="row link-list">
          <div className="col">
            <a href="https://www.sololearn.com/Profile/4761008" target="_blank">
                <img className="cnt-img" alt="SoloLearn" src={'https://www.sololearn.com/Uploads/icons/sololearn.png'}/>
            </a>
          </div>
          <div className="col">
            <a href="https://www.facebook.com/mikhail.babojkho">
              <img className="cnt-img" alt="Facebook" src={'https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png'}/>
            </a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/in/michael-babozhko-066059155/">
              <img className="cnt-img" src={linIco} alt="LinkedIn" />
            </a>
          </div>
          <div className="col">
            <a href="https://web.telegram.org/#/im?p=@michael1babozhko">
              <img className="cnt-img" src={telIco} alt="Telegram" />
            </a>
          </div>
          <div className="col">
            <a href="https://github.com/goodiny777">
              <img className="cnt-img" src={gitIco} alt="Git" />
            </a>
          </div>
          </div>
      <p className="mrg color-white">or just</p>
      <button type="button"  className="btn btn-primary mrg" onClick={sendMail}>Mail me</button>
      </div>
    <Footer/>
    </div>
  );
}

function sendMail() {
    var link = "mailto:goodiny777@gmail.com";
    window.location.href = link;
}

export default Home;
