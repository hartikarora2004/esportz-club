import React from 'react';
import '../css/team.css';
import '../css/sponsor.css';
import Footer from './Footer';
import logoImage from '../images/logo.png';

const Sponsors = () => {
  return (
    <div>
      {
        <div className="sponsorship">
          <div className="sponsorshipHead">
            <div className="moreInfo">
              Contact us for more info:
            </div>
            <div style={{ 'margin-bottom': '5px' }}>
              <b>
                Harsh Singhal
              </b>
            </div>
            <a href="tel:7728837630" className="teleIcon">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
              7728837630
            </a>
            <a href="mailto:2020eeb1171@iitrpr.ac.in" className="mailIcon">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
              </svg>
              2020eeb1171@iitrpr.ac.in
            </a>
          </div>
        </div>
      }
      {
        <br></br>
      }
      {
        <br></br>
      }
      {
        <div className="sponsors">
          <div className="eventSponsor">
            <div className="textSponsor">
              Event Sponsors
            </div>
            <div className="sponsorsLogo">
              <div className="Logo">
                <a to="/">
                  <img src={logoImage} alt="Logo" />
                </a>
              </div>
              <div className="Logo">
                <a to="/">
                  <img src={logoImage} alt="Logo" />
                </a>
              </div>
              <div className="Logo">
                <a to="/">
                  <img src={logoImage} alt="Logo" />
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="yearLongSponsor">
            <div className="textSponsor">
              Year Long Sponsors
            </div>
            <div className="sponsorsLogo">
              <div className="Logo">
                <a to="/">
                  <img src={logoImage} alt="Logo" />
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="sponsorsText">
            Ignite excitement and connect with budding gamers and tech aficionados. As a sponsor, your brand will shine across our dynamic events, social media, and campus buzz. Elevate your market reach and network with future industry leaders. Choose from Platinum, Gold, Silver, or Bronze tiers, or customize a package to suit your goals. Join us in nurturing talent, teamwork, and innovation.
          </div>
          <div className="sponsorsText below">
            Contact us at <span className="change">sa.esportz@iitrpr.ac.in</span> to unlock unique sponsorship opportunities and be part of the gaming revolution at <span className="change">IIT Ropar's ESportZ Club</span>. Game on!
          </div>
        </div>
      }
      {
        <div className="div1 d-none d-md-block">
          <div className="divrect">
          </div>
          <div className="recttext">
            Sponsors
          </div>
        </div>
      }
      <Footer />
    </div>
  );
};

export default Sponsors;
