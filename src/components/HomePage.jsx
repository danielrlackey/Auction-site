import React,{useState} from "react";
import FooterPage from "./FooterPage.jsx";
import HomePageHeader from "./HomePageHeader.jsx"
import HomePageImageDisplay from "../components/HomePageImageDisplay";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"
import SideBarMenu from "./SideBarMenu.jsx";

// import HomePageImageDisplay from ".components/HomePageImageDisplay.jsx";



const HomePage = (props) => {

    const [sideBarMenuOpen, setSideBarMenuOpen] = useState(false)

    return (
        <div>
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
                <HomePageHeader/>
                <HomePageImageDisplay />
                <FooterPage />
            </div> 
        </div>
    )
};

export default HomePage;