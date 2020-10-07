import React,{useState, useEffect} from "react";
import FooterPage from "./FooterPage.jsx";
import HomePageHeader from "./HomePageHeader.jsx"
import HomePageImageDisplay from "../components/HomePageImageDisplay";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"
import SideBarMenu from "./SideBarMenu.jsx";
import {connect} from "react-redux";
import MiniRankingsList from "./MiniRankingsList";
import Grid from '@material-ui/core/Grid';
import {fighterRankingsData, fighterDivisionalRankingsData} from "../actions/getdata.jsx";

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./HomePage.styles.js";

// import HomePageImageDisplay from ".components/HomePageImageDisplay.jsx";



const HomePage = (props) => {

    const {rankings, classes} = props
    console.log(rankings,"from home page")

    useEffect(()=>{
        props.fighterDivisionalRankingsData()
        props.fighterRankingsData()
    },[])

    const [sideBarMenuOpen, setSideBarMenuOpen] = useState(false)

    const division = rankings.data.filter((rank) => rank.type == "div")
    const p4p = rankings.data.filter((rank)=>rank.type == "p4p")

    return (
        <div className={classes.background}>
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
                {/* todo - image timer */}
                <HomePageImageDisplay/>
                <hr className={classes.hrHead}/>
                <Grid  container>
                    <Grid className={classes.rankCol} container item md={6}>
                        <div>
                            {p4p &&
                                <MiniRankingsList 
                                rankings={p4p}
                                title={"P4P Rankings"}
                            />
                            }
                        </div>                     
                    </Grid>
                    <Grid className={classes.rankCol} container item md={6}>
                        <div >
                            {division &&
                                <MiniRankingsList 
                                rankings={division}
                                title={"Divisional Rankings"}
                                />
                            }
                        </div>
                
                    </Grid>
                </Grid>
                           
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(HomePage));