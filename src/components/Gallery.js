import React from 'react';
import Footer from './Footer';
import '../css/team.css';
import '../css/gallery.css';
import img1 from '../images/gallery/1.jpg';
import img2 from '../images/gallery/2.jpg';
import img3 from '../images/gallery/3.jpg';
import img4 from '../images/gallery/4.jpg';
import img5 from '../images/gallery/5.jpg';
import img6 from '../images/gallery/6.jpg';
import img7 from '../images/gallery/7.jpg';
import img8 from '../images/gallery/8.jpg';

const Contact = () => {
  return (
    <div>
      {
        <div className="all-images">
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={img7} alt="" />
              </div>
            </div>
          </div>
          <div className="image-cards">
            <div className="image-card">
              <div className="image">
                <img src={img8} alt="" />
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
