import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FooterPage from "./FooterPage.jsx";
import ItemDisplayCard from "./ItemDisplayCard.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import SideBarMenu from "./SideBarMenu";
import { getItems } from "../actions/posts.jsx";

// some notes
const BrowseItemsPage = (props) => {

    const  {posts, getItems} = props
    const [sideBarMenuOpen, setSideBarMenuOpen] = useState(false)

    useEffect(()=>{
        getItems()
    },[])

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
            <p>this the the page where you can broswe items and chose items to buy</p>
             {posts && posts.userPosts && posts.userPosts.map((post)=>{
                return(
                    <ItemDisplayCard 
                    itemDescription={post && post.itemDescription}
                    askingPrice={post && post.askingPrice}
                    itemDetails={post && post.itemDetails}
                    pictures={post && post.pictures}
                />
                )
                
            })}
            <Link to="/">Home</Link>
            <div>
                <FooterPage />
            </div>
        </div>
    )
};


const mapDispatchToProps = (dispatch) => ({
    getItems: () => dispatch(getItems())
});

function mapStateToProps({posts}) {
    return {posts}
}

export default connect(mapStateToProps,mapDispatchToProps)(BrowseItemsPage)
