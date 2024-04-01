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
        <div className="bg-red text-white text-lg text-center p-4">
            <p id="clock"></p>
            <p>Christopher Vinantius - 2024</p>
        </div>
    );
}

export default Footer;