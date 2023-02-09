import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <div className='experience-container'>
            <link
                href='https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'
                rel='stylesheet'
            ></link>
            <link
                href='https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap'
                rel='stylesheet'
            ></link>
            <div className='about-container'>
                <h1>ABOUT</h1>
                <p className='experience-summary'>
                    Software engineer experienced in embedded systems and web
                    application development, proficient in MERN stack.
                    Knowledgeable and solution-oriented engineer, who’s
                    communicative, creative, and a team player. Interested in
                    finding a full-stack role to develop applications that
                    delight customers and achieve company goals.
                </p>
            </div>
            <div className='experience-section'>
                <h2 className='experience-heading'>
                    EXPERIENCE
                    <hr className='horizontal-line' />
                </h2>

                <div className='job-container'>
                    <div className='job-1'>
                        <h3 className='job-title'>
                            Full-Stack Software Engineer, Twisted Rope
                        </h3>
                        <p className='job-date'>
                            November 2021 - November 2022
                        </p>

                        <ul className='job-summary'>
                            <li className='job-bullet'>
                                Created WordPress sites using various plugins as
                                well as custom code
                            </li>
                            <li className='job-bullet'>
                                Developed mobile-responsive and interactive
                                modules with dynamically generated content using
                                HTML, SCSS, JS, and jQuery
                            </li>
                            <li className='job-bullet'>
                                Helped provide pertinent analytics regarding
                                project proposals
                            </li>
                            <li className='job-bullet'>
                                Developed data models, implement micro service
                                architecture, aggregated data into
                                easy-to-understand graphs and tables
                            </li>
                        </ul>
                    </div>
                    <div className='job-2'>
                        <h3 className='job-title'>
                            Software Engineer, Cisco Systems
                        </h3>
                        <p className='job-date'>June 2019 - November 2020</p>

                        <ul className='job-summary'>
                            <li className='job-bullet'>
                                Developed, tested, and maintained network
                                classification features for Cisco’s software
                                defined wide area networking (SD-WAN) solutions
                            </li>

                            <li className='job-bullet'>
                                Collaborated with overseas engineers across
                                global time zones
                            </li>

                            <li className='job-bullet'>
                                Increased code coverage of testing using Python
                                scripts which automated network topology setup
                                and router configuration
                            </li>

                            <li className='job-bullet'>
                                Improved usability of CLI commands by enhancing
                                the predictive command functionality
                            </li>
                        </ul>
                    </div>
                    <div className='job-3'>
                        <h3 className='job-title'>
                            Software Engineer Intern, JPMorgan Chase & Co.
                        </h3>
                        <p className='job-date'>June 2018 - August 2018</p>

                        <ul className='job-summary'>
                            <li className='job-bullet'>
                                Developed website UI/UX for opening a bank
                                account online with JavaScript and Ractive.js
                            </li>

                            <li className='job-bullet'>
                                Utilized existing libraries for dynamic web page
                                design and content, including Bootstrap for a
                                mobile-first experience
                            </li>

                            <li className='job-bullet'>
                                Tested website using sinon, chai, and mocha
                            </li>
                        </ul>
                    </div>
                    <div className='job-4'>
                        <h3 className='job-title'>
                            Software Engineer Intern, JPMorgan Chase & Co.
                        </h3>
                        <p className='job-date'>June 2017 - August 2017</p>

                        <ul className='job-summary'>
                            <li className='job-bullet'>
                                Streamlined the document retrieval system by
                                consolidating multiple document archives under a
                                RESTful search API using Spring Boot
                            </li>

                            <li className='job-bullet'>
                                Deployed deliverables every two weeks, such as
                                exception handling, authentication, and
                                multi-threading
                            </li>

                            <li className='job-bullet'>
                                Achieved 99% code coverage by delivering a test
                                suite using mockito
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
