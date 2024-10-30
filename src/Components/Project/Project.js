import React from "react";
import ProjectBox from "./ProjectBox.js";

function Project() {

    const projects = [
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
        // {
        //     image: "../assets/Projects/BluejackGames.png",
        //     alt: "BlueJack Games",
        //     title: "BlueJack Games",
        //     content: "BlueJack Games is a fictional simple mobile application - as a theme for my final group project of User Experience college course. I was responsible for implementing the application design into the form of an Android application by using Java and Android Studio.",
        //     href: "https://github.com/christophervinantius/BluejackGames"
        // },
        // {
        //     image: "",
        //     alt: "Recycon",
        //     title: "Recycon",
        //     content: "Recycon is a fictional web application - as a theme for my final group project of Web Programming college course. This web application was finished using Laravel, a framework of PHP.",
        //     href: "https://github.com/christophervinantius/Recycon"
        // },
        // {
        //     image: "",
        //     alt: "MyBlog",
        //     title: "MyBlog",
        //     content: "MyBlog is a fictional web application - as a theme for my final group project of Web Programming college course. This web application was finished using Next.js, a framework of React.js.",
        //     href: "https://github.com/christophervinantius/Recycon"
        // }
    ]

    const projectList = projects.map((project) => {
        return <ProjectBox image={project.image} alt={project.alt} title={project.title} content={project.content} href={project.href} />
    });

    return (
        <div id="project-section" className="pt-4 pb-8 px-8 flex flex-col items-center justify-center gap-4">
            <div className="text-3xl font-bold text-red-800">
                <h1>My Projects</h1>
            </div>
            <div className="flex flex-col items-center justify-between gap-8">
                {projectList}
            </div>
        </div>
    );
}

export default Project;