import React from 'react';
import Footer from './Footer';
import '../css/team.css';
import '../css/home.css';
import video from '../videos/home.mp4';
import about from '../images/about.jpg';
import join from '../images/join.jpg';

const Home = () => {
  return (
    <div>
      <div className="videoBgContainer">
        <video autoPlay loop playsInline muted>
          <source
            src={video}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="videoOverlay">
          <div className="videoHeading">
            WELCOME TO THE INDIA'S FIRST
          </div>
          <div className="videoText">
            ESportZ Club of IIT Ropar
          </div>
          <div className="brochureBtn">
            <a class="event-link" href="https://drive.google.com/file/d/1hOTBG1hS-CbJvMUzasBu3G8dwwpEOWsL/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
              Brochure
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="firstBox">
        <div className="firstLeft animateLeftToRight pc">
          <img src={about} alt="about us" />
        </div>
        <div className="firstRight">
          <div className="firstRightBigText">
            About Us
          </div>
          <div className="firstRightSmallText">
            ESportZ Club, the epicenter of gaming at IIT Ropar, unites gamers with a shared purpose. Our mission: to blend competitive gaming and camaraderie. From inter-college tournaments to casual sessions, skill enhancement workshops, and diverse community events, we cater to all skill levels. Inclusivity reigns supreme, making space for every background. Through meet-ups, socials, and content creation, we fuel the gaming fervor. Dive into esports, connect on Discord, and let's shape the future of gaming together!
          </div>
        </div>
        <div className="firstLeft animateLeftToRight homePhone">
          <img src={about} alt="about us" />
        </div>
      </div>
      <div className="secondBox">
        <div className="secondLeft">
          <div className="secondLeftBigText">
            Join the Club
          </div>
          <div className="secondLeftSmallText">
            The ESportZ Club at IIT Ropar is a vibrant community uniting individuals passionate about gaming. Members engage in various gaming activities, fostering a collaborative and competitive environment. Through events, tournaments, and casual gaming sessions, the club provides a platform for gamers to connect, improve their skills, and share their enthusiasm for esports. It's a space where like-minded individuals come together to celebrate gaming culture, learn from one another, and build lasting friendships.
          </div>
        </div>
        <div className="secondRight animateRightToLeft">
          <img src={join} alt="about us" />
        </div>
      </div>
      {
        <div className="div1 d-none d-md-block">
          <div className="divrect">
          </div>
          <div className="recttext">
            Home
          </div>
        </div>
      }
      <Footer />
    </div>
  );
};

export default Home;
