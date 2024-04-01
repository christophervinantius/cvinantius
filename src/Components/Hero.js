import React from "react";

function Hero() {

    return (
        <div id="hero-section" className="p-8 flex flex-col items-center justify-center text-center gap-4">
            <div className="flex flex-col gap-2 text-3xl font-bold text-red">
                <h1>Christopher Vinantius</h1>
                <p>Computer Science Student</p>
                <a className="text-lg font-light p-1 bg-white text-red rounded-full border-4 border-red" href="assets/CV/CV_ChristopherVinantius_ATS.pdf" target="_blank" rel="noreferrer">See my Curriculum Vitae</a>
            </div>
            <div className="flex flex-col gap-1 text-lg bg-red text-white p-4 shadow-xl">
                <p>I am a final year Computer Science student of Bina Nusantara University in Jakarta.</p>
                <p>I love to <b><u>keep myself organized</u></b> in everything I do, and to <b><u>finish every single task perfectly</u></b> as planned.</p>
                <p>I am keen to <b><u>work hard</u></b> and to <b><u>acquire more precious skills</u></b>, either hard or soft skills, all in order to achieve my target.</p>
                <p>I am passionate in <u>web development</u>. I want to learn more about the other things to <b><u>keep improving myself</u></b>.</p> 
            </div>
        </div>
    );
}

export default Hero;