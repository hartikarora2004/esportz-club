import React from 'react';
import '../css/team.css';
import Footer from './Footer';

const Events = () => {
  return (
    <div>
      <h1>events page</h1>
      {/* Other content */}
      {
        <div className="div1 d-none d-md-block">
          <div className="divrect">
          </div>
          <div className="recttext">
            Events
          </div>
        </div>
      }
      <Footer />
    </div>
  );
};

export default Events;
