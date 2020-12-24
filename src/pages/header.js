import React from "react";
import { Link } from "gatsby";

const Header = () => (
    // <!-- navigation bar -->
    <nav>
        <div class="logo">
            <h1><Link to="/">unStynt</Link></h1>
        </div>

        <ul class="nav-links">
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>

        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
)

export default Header