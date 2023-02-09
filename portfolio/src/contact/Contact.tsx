import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-left-container'>
                <h2 className='contact-heading'>CONTACT</h2>
                <p className='contact-text'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam.
                </p>

                <form action='' className='contact-form'>
                    <input
                        className='contact-form-field'
                        type='text'
                        placeholder='Name'
                    />
                    <input
                        className='contact-form-field'
                        type='email'
                        placeholder='Email'
                    />
                    <textarea
                        className='contact-form-field contact-form-msg'
                        placeholder='Message'
                    />
                    <button className='contact-form-btn' type='submit'>
                        Send Message
                    </button>
                </form>
            </div>

            <div className='contact-right-container'>
                <img src='' alt='Glendale, CA' />
            </div>
        </div>
    );
};

export default Contact;
