import React, { useState } from "react";
import { Link } from "gatsby";

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const handleNavBar = () => {
        setToggle(!toggle)
        const navBar = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li')
        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        })
        navBar.classList.toggle('nav-active');
    }

    let isToggle = toggle ? 'toggle' : ''

    return (
        // <!-- navigation bar -->
        <nav>
            <div class="logo">
                <h1><Link to="/">unStynt</Link></h1>
            </div>

            <ul class="nav-links">
                <li>
                    <Link to="/get-in-touch" onClick={handleNavBar}>Get Started</Link>
                </li>
                <li>
                    <Link to="/about" onClick={handleNavBar}>About</Link>
                </li>
            </ul>

            <div class={`burger + ${isToggle}`} onClick={handleNavBar}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    )
}



export default Header