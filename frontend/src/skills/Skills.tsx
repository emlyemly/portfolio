import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className='skills-container'>
            <div className='heading-container'>
                <hr className='horizontal-line hr-skills' />
                <h2 className='skills-heading'>SKILLS</h2>
                <hr className='horizontal-line hr-skills' />
            </div>

            <div className='skills-section'>
                <span className='skill'>Python</span>
                <span className='skill'>Javascript</span>
                <span className='skill'>jQuery</span>
                <span className='skill'>git</span>
                <span className='skill'>HTML</span>
                <span className='skill'>CSS</span>
                <span className='skill'>React</span>
                <span className='skill'>RESTful API's</span>
                <span className='skill'>Node.js</span>
                <span className='skill'>Express.js</span>
                <span className='skill'>Redux</span>
                <span className='skill'>MongoDB</span>
                <span className='skill'>Docker</span>
                <span className='skill'>SASS/SCSS</span>
                <span className='skill'>C</span>
                <span className='skill'>Java</span>
            </div>
        </div>
    );
};

export default Skills;
