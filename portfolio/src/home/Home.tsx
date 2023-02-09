import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Home.css';

const Home = () => {
    const handleHover = (e: React.MouseEvent<HTMLHeadingElement>) => {
        const target = e.target as Element;
        e.preventDefault();
        target.classList.toggle('heading-hover-color');
    };

    return (
        <div className='home-container'>
            <link
                href='https://fonts.googleapis.com/css?family=Montserrat'
                rel='stylesheet'
            ></link>
            <Sidebar />

            <div className='text-container'>
                <div className='name-text'>
                    <h2 className='name'>Emily Sheng</h2>
                    <h3 className='position'>SOFTWARE ENGINEER</h3>
                </div>

                <div className='link-text'>
                    <h1
                        onMouseOver={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHover(e)}
                    >
                        <a href='#experience-container'>EXPERIENCE</a>
                    </h1>
                    <h1
                        onMouseOver={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHover(e)}
                    >
                        <a href='#portfolio-container'>PORTFOLIO</a>
                    </h1>
                    <h1
                        onMouseOver={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHover(e)}
                    >
                        <a href='#contact-container'>CONTACT</a>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
