import React from 'react';
import './Sidebar.css';
import linkedInLogo from '../assets/GitHub_Button.svg';
import gitHubLogo from '../assets/LinkedIn_Button.svg';

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
                    src={linkedInLogo}
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
                    src={gitHubLogo}
                    alt='github-logo'
                    className='github-logo'
                />
            </a>

            <div className='vertical-line' />
        </div>
    );
};

export default Sidebar;
