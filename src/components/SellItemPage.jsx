import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import SideBarMenu from "./SideBarMenu.jsx"

const SellItemPage = () => {

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
            <p>This is the page where stuff is sold</p> 
            <Link to="/">Home</Link>
        </div>
    );
}

export default SellItemPage;