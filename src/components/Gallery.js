import React from 'react';
import Footer from './Footer';
import '../css/team.css';

const Contact = () => {
  return (
    <div>
      <h1>contact us page</h1>
      {/* Other content */}
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
