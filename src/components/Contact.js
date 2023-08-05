import React from 'react';
import Footer from './Footer';
import '../css/team.css';
import '../css/contact.css';

const Contact = () => {
  return (
    <div>
      {
        <div class="formx">
          <form class="formwrapper">
            <header class="text-center">
              <div id="group">
                <h2>Contact Us</h2>
              </div>
            </header>
            <div class="formdiv">
              <input type="text" class="forminput" placeholder="NAME" required/>
            </div>
            <div class="formdiv">
              <input type="email" class="forminput" placeholder="EMAIL" required/>
            </div>
            <div class="formdiv">
              <input type="text" class="forminput" placeholder="PHONE" required/>
            </div>
            <div class="formdiv">
              <textarea rows="5" column="50" class="forminputmsg" placeholder="MESSAGE/FEEDBACK" required="">
              </textarea>
            </div>
            <button class="cntbtn" type="submit">SUBMIT</button>
          </form>
        </div>
      }
      {
        <div className="div1 d-none d-md-block">
          <div className="divrect">
          </div>
          <div className="recttext">
            Contacts
          </div>
        </div>
      }
      <Footer />
    </div>
  );
};

export default Contact;
