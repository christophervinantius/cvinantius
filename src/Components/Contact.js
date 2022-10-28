import React from "react";
import Link from "./Link.js";

function Contact() {

const links = [
        {
            href:"https://wa.me/6282231762291",
            src: "assets/whatsapp_red.png",
            alt: "WhatsApp"  
        },
        {
            href: "mailto:vinantius7@gmail.com",
            src: "assets/gmail_red.png",
            alt: "Gmail"
        },
        {
            href: "https://www.linkedin.com/in/christophervinantius/",
            src: "assets/linkedin_red.png",
            alt: "LinkedIn"
        },
        {
            href: "https://www.github.com/christophervinantius/",
            src: "assets/github_red.png",
            alt: "GitHub"
        }
    ];

    const linksList = links.map((link) => {
        return <Link href={link.href} src={link.src} alt={link.alt} />
    }); 

    return (
        <div className="contact-section" id="contact-section">
            <div className="contact-intro">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-subsection">
                <div className="socialmedia-list">{linksList}</div>
                
            </div>
        </div>
    );
}

export default Contact;