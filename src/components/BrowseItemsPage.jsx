import React, { useState } from "react";
import FooterPage from "./FooterPage.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { connect } from "react-redux";
import SideBarMenu from "./SideBarMenu";

const BrowseItemsPage = (props) => {
    const  {posts} = props

    const [sideBarMenuOpen, setSideBarMenuOpen] = useState(false)
    console.log(posts)
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
             {posts.userPosts&& posts.userPosts.map((post)=>{
                return(
                    <div style={{border: "1px solid black"}}>
                         <p>{post.itemDescription}</p>
                         <p>{post.askingPrice}</p>
                         <p>{post.itemDetails}</p>
                    </div>    
                )
                
            })}
            <Link to="/">Home</Link>
            <div>
                <FooterPage />
            </div>
        </div>
    )
};

function mapStateToProps({posts}) {
    return {posts}
}

export default connect(mapStateToProps)(BrowseItemsPage)
