import React from 'react';
import Footer from './Footer';
import '../css/team.css';
import '../css/gallery.css';
import image1 from '../images/events/valo.jpeg';

const Contact = () => {
  return (
    <div>
      {
        <div className="all-images">
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>

          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
        </div>
      }
      {
        <div className="div1 d-none d-md-block">
          <div className="divrect">
          </div>
          <div className="recttext">
            Gallery
          </div>
        </div>
      }
      <Footer />
    </div>
  );
};

export default Contact;
