import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import SideBarMenu from "./SideBarMenu";

const BrowseItemsPage = () => {

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
            <p>this the the page where you can broswe items and chose items to buy</p>
            <Link to="/">Home</Link>
        </div>
    )
};

export default BrowseItemsPage;