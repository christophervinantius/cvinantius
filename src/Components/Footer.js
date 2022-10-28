import React from "react";

function Footer() {

    setInterval(showClock, 1000);

    function showClock() {
        const date = new Date();
        let hour = date.getHours();
        if(hour < 10){
            hour = "0" + hour;
        }
        let min = date.getMinutes();
        if(min < 10){
            min = "0" + min;
        }
        let sec = date.getSeconds();
        if(sec < 10){
            sec = "0" + sec;
        }
        document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
    }

    return (
        <div className="footer-section">
            <p id="clock"></p>
            <p>Christopher Vinantius - 2022</p>
        </div>
    );
}

export default Footer;