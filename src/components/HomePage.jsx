import React,{useState, useEffect} from "react";
import FooterPage from "./FooterPage.jsx";
import HomePageHeader from "./HomePageHeader.jsx"
import HomePageImageDisplay from "../components/HomePageImageDisplay";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"
import SideBarMenu from "./SideBarMenu.jsx";
import {connect} from "react-redux";
import MiniRankingsList from "../MiniRankingsList";
import {fighterRankingsData, fighterDivisionalRankingsData} from "../actions/getdata.jsx";

// import HomePageImageDisplay from ".components/HomePageImageDisplay.jsx";



const HomePage = (props) => {

    const {rankings} = props
    console.log(rankings,"from home page")

    useEffect(()=>{
        props.fighterDivisionalRankingsData()
        props.fighterRankingsData()
    },[])

    const [sideBarMenuOpen, setSideBarMenuOpen] = useState(false)

    const division = rankings.data.filter((rank) => rank.type == "div")
    const p4p = rankings.data.filter((rank)=>rank.type == "p4p")

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
                    rankings={<Link to="news&rankings">News & Rankings </Link>}
                />
                }
                <HomePageHeader/>
                <HomePageImageDisplay />
                {p4p &&
                    <MiniRankingsList 
                    rankings={p4p}
                    title={"P4P Rankings"}
                    />
                }
                {division &&
                    <MiniRankingsList 
                    rankings={division}
                    title={"Divisional Rankings"}
                    />
                }
                <FooterPage />
            </div> 
        </div>
    )
};

const mapStateToProps = ({rankings}) => {
    return {rankings}
}

const mapDispatchToProps = (dispatch) => ({
    fighterRankingsData: (data) => dispatch(fighterRankingsData(data)),
    fighterDivisionalRankingsData: (data) => dispatch(fighterDivisionalRankingsData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);