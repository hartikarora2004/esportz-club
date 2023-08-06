import React from 'react';
import footer from '../images/footer.png';
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      {
        <div className="footer">
          <img src={footer} alt="about us" />
          <div className="footerContent">
            <div className="rightContent footerPhone">
              <div className="footerIcons">
                <a href="https://www.linkedin.com/company/esportz-iitrpr/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://instagram.com/esportz.iitrpr/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://youtube.com/@esportzclubiitropar" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="mailto:sa.esportz@iitrpr.ac.in" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                  </svg>
                </a>
              </div>
              <div className="footerRightText">
                ESPORTZ CLUB
              </div>
            </div>
            <div className="leftContent">
              <div className="leftFirst">
                <div className="leftFirstText">
                  Developed by:
                </div>
                <a href="https://harsh-singhal.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Harsh Singhal
                </a>
              </div>
              <div className="leftFirst">
                <div className="leftFirstText">
                  Founded by:
                </div>
                <a href="https://www.linkedin.com/in/vaibhav-singhal-iit-ropar" target="_blank" rel="noopener noreferrer">
                  Vaibhav Singhal
                </a>
              </div>
              <div className="leftThird">
                &copy; 2023 Copyright: ESportZ Club IITRPR
              </div>
            </div>
            <div className="rightContent footerPC">
              <div className="footerIcons">
                <a href="https://www.linkedin.com/company/esportz-iitrpr/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://instagram.com/esportz.iitrpr/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://youtube.com/@esportzclubiitropar" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="mailto:sa.esportz@iitrpr.ac.in" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                  </svg>
                </a>
              </div>
              <div className="footerRightText">
                ESPORTZ CLUB
              </div>
            </div>
          </div>
        </div>
      }
    </footer>
  );
};

export default Footer;
