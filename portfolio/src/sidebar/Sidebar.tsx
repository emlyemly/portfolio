import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <a
                className='linkedin-link'
                href='https://www.linkedin.com/in/emily-sheng-917b35117/'
                target='_blank'
                rel='noreferrer'
            >
                <img
                    src={process.env.PUBLIC_URL + '../LinkedIn_Button.svg'}
                    alt='linkedin-logo'
                    className='linkedin-logo'
                />
            </a>

            <a
                className='github-link'
                href='https://github.com/emlyemly'
                target='_blank'
                rel='noreferrer'
            >
                <img
                    src={process.env.PUBLIC_URL + '../GitHub_Button.svg'}
                    alt='github-logo'
                    className='github-logo'
                />
            </a>

            <div className='vertical-line' />
        </div>
    );
};

export default Sidebar;
