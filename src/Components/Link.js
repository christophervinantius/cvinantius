import React from "react";

function Link(props) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer"><img src={props.src} alt={props.alt}></img></a>
    );
}

export default Link;