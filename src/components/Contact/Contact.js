import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id='contact'>
      <h1>CONTACT ME</h1>
      <div className='form'>
        <form action='https://formspree.io/khoado.dk@gmail.com' method='POST'>
          <div className='form-name'>Name</div>
          <input
            placeholder='John Doe'
            type='text'
            className='form-control'
            name='firstName'
            required
          />
          <div className='form-name'>Email</div>
          <input
            placeholder='email@example.com'
            type='email'
            className='form-control'
            name='email'
            required
          />
          <div className='form-name'>Subject</div>
          <input
            placeholder='Hello'
            type='text'
            className='form-control'
            name='subject'
          />
          <textarea
            placeholder=''
            name='message'
            className='form-control'
            rows='10'></textarea>
          <div className='form-group'>
            <input className='submit-btn' type='submit' value='Send' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
