import React from 'react';
import Home from './home/Home';
import Experience from './experience/Experience';
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';

const App = () => {
    return (
        <div>
            <Home />
            <Experience />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default App;
