import React, { useState } from "react";
import ProjectBox from "./ProjectBox.js";

function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const projects = [
        {
            image: "../assets/Projects/WeTrack.png",
            alt: "WeTrack",
            title: "WeTrack",
            content: "WeTrack is a task management web application that has ChatGPT integration as its core feature. This project was done in a group of three by using Next.js, Tailwind CSS, and Google Firebase.",
            href: "https://github.com/ervin-sungkono/WeTrack-App",
            hrefDemo: "https://wetrack-app.vercel.app/"
        },
        {
            image: "../assets/Projects/LaForant.png",
            alt: "LaForant",
            title: "LaForant",
            content: "LaForant is a fictional First Person Shooter game project. Collaborated in a team of 2 developers, I implemented the web design into a website by using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
            href: "https://github.com/christophervinantius/LaForant"
        },
        {
            image: "../assets/Projects/BobaFest.png",
            alt: "BobaFest",
            title: "BobaFest",
            content: "BobaFest is a fictional event that showcases some of the latest technologies from various well-known companies in Indonesia. This project was done individually by using HTML, CSS, and JavaScript, jQuery, and Bootstrap.",
            href: "https://github.com/christophervinantius/BobaFest"
        },
    ]

    return (
        <div id="project-section" className="pt-4 pb-8 flex flex-col items-center justify-center gap-4">
            <div className="text-3xl font-bold text-red-800">
                <h1>Projects</h1>
            </div>
            <div className="relative w-full flex flex-col items-center">
                <ProjectBox
                    image={projects[currentIndex].image}
                    alt={projects[currentIndex].alt}
                    title={projects[currentIndex].title}
                    content={projects[currentIndex].content}
                    href={projects[currentIndex].href}
                    hrefDemo={projects[currentIndex].hrefDemo}
                />

                <div className="mt-4 flex w-4/5 md:w-1/6 justify-between">
                    <button onClick={prevProject} className="px-6 py-2 text-lg bg-red-800 text-white hover:bg-white hover:text-red-800 border-3 hover:border-red-800 transition duration-500 ease-in-out rounded-xl">Previous</button>
                    <button onClick={nextProject} className="px-6 py-2 text-lg bg-red-800 text-white hover:bg-white hover:text-red-800 border-3 hover:border-red-800 transition duration-500 ease-in-out rounded-xl">Next</button>
                </div>
            </div>
        </div>
    );
}

export default Project;