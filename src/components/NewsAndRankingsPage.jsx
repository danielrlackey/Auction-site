import React, { useState } from "react";
import FighterRankings from "./FighterRankings.jsx";
import FooterPage from "./FooterPage.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import SideBarMenu from "./SideBarMenu";

const NewsAndRankings = () => {

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
                rankings={<Link to="news&rankings">News & Rankings </Link>}
            />
            }
            <p>get the current rankings on fighters in boxing and mma</p>
            <Link to="/">Home</Link>
            <FighterRankings />
            <div>
                <FooterPage />
            </div>
        </div>
    )
};

export default NewsAndRankings;