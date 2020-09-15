import React from "react";
import { Link } from "react-router-dom";




const HomePage = () => {

    return (
        <div>
            <Link to="/"></Link>
            <Link to="browse-items">Browse </Link>
            <Link to="sell-items">Sell </Link>
            <Link to="facts">Facts </Link>
            <Link to="rankings">Rankings </Link>
        </div>
    )
};

export default HomePage;