import React, { useState } from "react";
import FooterPage from "./FooterPage.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import SideBarMenu from "./SideBarMenu.jsx";

const FighterFacts = (props) => {

    const [sideBarMenuOpen, setSideBarMenuOpen] = useState(false)

    return (
        <div>
            <Navbar
                setSideBarMenuOpen={setSideBarMenuOpen}
            />
            {sideBarMenuOpen &&
            <SideBarMenu
                sideBarMenuOpen={sideBarMenuOpen}
                setSideBarMenuOpen={setSideBarMenuOpen}
                sell={<Link className to="sell-items">Sell </Link>}
                facts={<Link to="facts">Facts </Link>}
                rankings={<Link to="rankings">Rankings </Link>}
            />
                }
            <p>A page where you can get facts on fighters</p>
            <Link to="/">Home</Link>
            <div>
                <FooterPage />
            </div>
        </div>
    )
};

export default FighterFacts;