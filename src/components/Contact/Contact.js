import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" data-aos="zoom-in" data-aos-delay="1000">
      <h1>CONTACT ME</h1>
      <hr />
      <p className="contact-subtitle">
        Let's work together <i className="fa fa-arrow-down"></i>
      </p>
      <div className="form">
        <form action="https://formspree.io/khoado.dk@gmail.com" method="POST">
          <div className="form-name">What do you call yourself?</div>
          <input
            type="text"
            className="form-control"
            name="firstName"
            required
          />
          <div className="form-name">Which email should I contact you?</div>
          <input type="email" className="form-control" name="email" required />
          <div className="form-name">How can I help you?</div>
          <input type="text" className="form-control" name="subject" />
          <div className="form-name">Your Message</div>
          <textarea
            placeholder=""
            name="message"
            className="form-control"
            rows="10"
          ></textarea>
          <div className="form-group">
            <input className="submit-btn" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
