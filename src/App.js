import React from 'react';
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero.js'
import Project from './Components/Project/Project.js';
import Contact from './Components/Contact.js'
import Footer from './Components/Footer.js'

function App() {
    return (
        <div className="font-rubik">
            <div>
                <Navbar />
                <Hero />
                <Project />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
