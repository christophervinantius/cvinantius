import React from "react";
import ProjectBox from "./ProjectBox.js";

function Project() {

    const projects = [
        {
            image: "../assets/Projects/LaForant.png",
            alt: "LaForant",
            title: "LaForant",
            content: "LaForant is a fictional First Person Shooter game project - as a theme for my final group project of Human and Computer Interaction college course. I was responsible for implementing the web design into the form of a website by using HTML, CSS, JavaScript, jQuery, and Bootstrap, while my another team member designed the web.",
            href: "https://github.com/christophervinantius/LaForant"
        },
        {
            image: "../assets/Projects/BobaFest.png",
            alt: "BobaFest",
            title: "BobaFest",
            content: "BobaFest is a fictional event that showcases some of the latest technologies from various well-known companies in Indonesia - as a theme for my final individual project of Front-End Development course I took in BNCC Learning and Training. This project was done by implementing the basics of Front-End Development: HTML, CSS, and JavaScript, while jQuery and Bootstrap were also used here to improve the web design appearance.",
            href: "https://github.com/christophervinantius/BobaFest"
        },
        {
            image: "../assets/Projects/BlueJackGames.png",
            alt: "BlueJack Games",
            title: "BlueJack Games",
            content: "BlueJack Games is a fictional simple mobile application - as a theme for my final group project of User Experience college course. I was responsible for implementing the application design into the form of an Android application by using Java and Android Studio.",
            href: "BluejackGames"
        }
    ]

    const projectList = projects.map((project) => {
        return <ProjectBox image={project.image} alt={project.alt} title={project.title} content={project.content} href={project.href} />
    });

    return (
        <div id="project-section" className="project-section">
            <div className="project-intro">
                <h1>My Projects</h1>
            </div>
            <div className="project-subsection">
                {projectList}
            </div>
        </div>
    );
}

export default Project;