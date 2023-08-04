import React from 'react';
import Footer from './Footer';
import '../css/team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Harsh from '../images/team/harsh.jpeg';
import Kratin from '../images/team/kratin.jpeg';
import Aayan from '../images/team/aayan.jpeg';
import Hartik from '../images/team/hartik.jpeg';
import Madhu from '../images/team/madhu.jpeg';
import Pankaj from '../images/team/pankaj.jpeg';
import Aryan_Senior from '../images/team/aryan-senior.jpeg';
import Ansaf from '../images/team/ansaf.jpg';
import Arun from '../images/team/arun.jpg';
import Vaibhav from '../images/team/vaibhav.jpeg';

const Team = () => {
  return (
    <div>
      {
        <div className="our-team">
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Vaibhav} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="instagram.com/thewebbhav" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/vaibhav-singhal-iit-ropar" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:vaibhavsinghal2808@gmail.com" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Vaibhav Singhal</div>
              <p style={{ color: 'white' }}>Secretary</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Pankaj} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="https://www.instagram.com/i.punkaj/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/itspunkaj" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:pankajsingh1397@gmail.com" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Pankaj Singh</div>
              <p style={{ color: 'white' }}>Representative</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Harsh} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="https://instagram.com/rooh_harsh?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/harsh-singhal-463a941bb" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:harshparkar27@gmail.com" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Harsh Singhal</div>
              <p style={{ color: 'white' }}>Sponsorship Head</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Aryan_Senior} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="https://instagram.com/0aryan_agarwal2?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/aryan-agarwal-a07394209" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Aryan Agarwal</div>
              <p style={{ color: 'white' }}>Super Coordinator</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Ansaf} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="https://instagram.com/_ansafahmad?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/ansaf-ahmad" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:ansaf.personal@gmail.com" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Ansaf Ahmad</div>
              <p style={{ color: 'white' }}>Super Coordinator</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Arun} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="https://instagram.com/_._arun_._._._?igshid=MmIzYWVlNDQ5Yg==" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/arun-kumar-36aa51219" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:arunpratap640@gmail.com" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Arun Kumar</div>
              <p style={{ color: 'white' }}>Super Coordinator</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Harsh} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="/team" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="/team" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Vaibhav Singhal</div>
              <p style={{ color: 'white' }}>Secretary</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Hartik} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="https://instagram.com/hartik_1014?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/hartikarora" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:hartikarora2502@gmail.com" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Hartik Arora</div>
              <p style={{ color: 'white' }}>Coordinator</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Kratin} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="https://instagram.com/__kratin18?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/kratin-sharma-07018225b" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Kratin Sharma</div>
              <p style={{ color: 'white' }}>Coordinator</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Aayan} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="https://instagram.com/aayansoni13?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/aayan-soni-471379259" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:aayansoni20004@gmail.com" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Aayan Soni</div>
              <p style={{ color: 'white' }}>Coordinator</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Harsh} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="/team" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="/team" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Vaibhav Singhal</div>
              <p style={{ color: 'white' }}>Secretary</p>
            </div>
          </div>
          <div className="team-outerbox">
            <div className="team-inner-box">
              <div className="image-container">
                <img src={Madhu} alt="" />
                <div className="overlay">
                  <div className="social-links-overlay">
                    <a href="https://www.instagram.com/madhu.siripurapu/?hl=en" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/siripurapu-madhu-sudhana-rao-67764724b" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member">Siripurapu. Madhusudhana Rao</div>
              <p style={{ color: 'white' }}>Coordinator</p>
            </div>
          </div>
        </div>
      }
      {
        <div className="div1 d-none d-md-block">
          <div className="divrect">
          </div>
          <div className="recttext">
            Team
          </div>
        </div>
      }
      <Footer />
    </div>
  );
};

export default Team;
