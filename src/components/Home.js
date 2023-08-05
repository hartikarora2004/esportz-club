import React from 'react';
import Footer from './Footer';
import '../css/team.css';
import '../css/home.css';
import video from '../video/home.mp4';

const Home = () => {
  return (
    <div>
      <div className="videoBgContainer">
        <video autoPlay loop playsInline>
          <source
            src={video}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="firstBox">
        <div className="firstLeft">
          <div className="firstLeftBigText">
            India's First
          </div>
          <div className="firstLeftSmallText">
            eSports Club of an IIT
          </div>
        </div>
        <div className="firstRight">
          <div className="firstRightBigText">
            About Us
          </div>
          <div className="firstRightSmallText">
            ESportZ Club, the epicenter of gaming at IIT Ropar, unites gamers with a shared purpose. Our mission: to blend competitive gaming and camaraderie. From inter-college tournaments to casual sessions, skill enhancement workshops, and diverse community events, we cater to all skill levels. Inclusivity reigns supreme, making space for every background. Through meet-ups, socials, and content creation, we fuel the gaming fervor. Dive into esports, connect on Discord, and let's shape the future of gaming together!
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
