import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <section id="contact">
            <h1>CONTACT ME</h1>
            <div className='form'>                 
                <form 
                    action='https://formspree.io/khoado.dk@gmail.com'
                    method='POST'
                >
                    <div className="form-name">Name*</div>
                    <input 
                        type='text' 
                        className='form-control' 
                        name='firstName' 
                        
                        required
                    />
                    <div className="form-name">Email*</div>
                    <input 
                        type='email' 
                        className='form-control' 
                        name='email' 
                        
                        required
                    />
                    <div className="form-name">Subject</div>
                    <input 
                        type='text' 
                        className='form-control' 
                        name='subject' 
                        
                    />
                    <textarea 
                        name='message'
                        className='form-control'
                        rows='10'
                        placeholder="Hi..."
                    >
                    </textarea>
                    <div className='form-group'>
                        <input
                            className='submit-btn'
                            type='submit'
                            value='Send'
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

