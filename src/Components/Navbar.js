import React from "react";

function Navbar() {
    return (
        <div className="bg-red-800 flex items-center justify-center px-12 py-8 w-full">
            <a href="#hero-section">
                <img className="hover:opacity-50 transition duration-500 ease-in-out" width={80} height={80} src="assets/CVLogoWhite.png" alt="CV Logo White" />
            </a>
        </div>
    );
}

export default Navbar;