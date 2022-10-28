import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero.js'
import Project from './Components/Project/Project.js';
import Experience from './Components/Experience/Experience.js'
import Contact from './Components/Contact.js'
import Footer from './Components/Footer.js'

function App() {
    return (
        <div className="App">{
            <div>
                <Navbar />
                <Hero />
                <Project />
                <Experience />
                <Contact />
                <Footer />
            </div>
        }</div>
    );
}

export default App;
