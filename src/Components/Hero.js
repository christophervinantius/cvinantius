import React from "react";

function Hero() {

    return (
        <div id="hero-section" className="py-8 flex flex-col items-center justify-center text-center gap-4">
            <div className="flex flex-col gap-4 text-3xl font-bold text-red-800">
                <h1>Christopher Vinantius</h1>
                <a className="text-lg font-light p-1 bg-white text-red-800 rounded-xl border-3 border-red-800 hover:bg-red-800 hover:text-white transition duration-500 ease-in-out" href="https://drive.google.com/file/d/16RyQIhZPwUtx4rdMKCNE0BC_9JpTL3zw/view?usp=sharing" target="_blank" rel="noreferrer">Check out my Curriculum Vitae!</a>
            </div>
            <div className="w-4/5 flex flex-col gap-4 text-sm md:text-lg bg-red-800 text-white p-6 shadow-xl rounded-xl">
                <p><u>Experienced in developing web applications</u> using React.js, Next.js, Vue.js, and Nuxt.</p>
                <p>Eager to acquire <u>the latest technologies</u> to keep improving myself.</p> 
                <p>Love to <u>keep myself organized</u> in everything I do.</p>
                <p>Keen to <u>work hard</u> and to <u>contribute</u> to impactful projects.</p>
            </div>
        </div>
    );
}

export default Hero;