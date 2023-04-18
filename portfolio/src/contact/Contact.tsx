import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-container' id='contact-container'>
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
                    <div className='contact-form-btn-div'>
                        <button className='contact-form-btn' type='submit'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <div className='contact-right-container'>
                <img
                    src={process.env.PUBLIC_URL + '../Map/Map@2x.png'}
                    alt='Glendale, CA'
                    className='contact-map'
                />
            </div>
        </div>
    );
};

export default Contact;
