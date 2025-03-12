import React from "react";

function Hero() {

    return (
        <div id="hero-section" className="py-8 flex flex-col items-center justify-center text-center gap-4">
            <div className="flex flex-col gap-4 text-3xl font-bold text-red-800">
                <h1>Christopher Vinantius</h1>
                <a className="text-lg font-light p-1 bg-white text-red-800 rounded-xl border-3 border-red-800 hover:bg-red-800 hover:text-white transition duration-500 ease-in-out" href="assets/CV/CV_ChristopherVinantius.pdf" target="_blank" rel="noreferrer">Check out my Curriculum Vitae!</a>
            </div>
            <div className="w-4/5 flex flex-col gap-4 text-sm md:text-lg bg-red-800 text-white p-6 shadow-xl rounded-xl">
                <p>I am a Computer Science graduate from Bina Nusantara University living in Jakarta, Indonesia.</p>
                <p>I am passionate in <u>web development</u>. I want to learn more about the other things to <u>keep improving myself</u>.</p> 
                <p>I love to <u>keep myself organized</u> in everything I do, and to <u>finish every single task perfectly</u> as planned.</p>
                <p>I am keen to <u>work hard</u> and to <u>acquire more precious skills</u> in order to achieve my target.</p>
            </div>
        </div>
    );
}

export default Hero;