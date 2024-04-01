import React from "react";

function Link(props) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer"><img className="w-3/4" src={props.src} alt={props.alt}></img></a>
    );
}

export default Link;