import React, { useState } from "react";
import { connect } from "react-redux";
import FooterPage from "./FooterPage.jsx";
import ItemDisplayCard from "./ItemDisplayCard.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import SideBarMenu from "./SideBarMenu";

// some notes
const BrowseItemsPage = (props) => {
    const  {posts} = props
    
    console.log(posts);

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
            <p>this the the page where you can broswe items and chose items to buy</p>
             {posts.userPosts&& posts.userPosts.map((post)=>{
                return(
                    <ItemDisplayCard 
                    itemDescription={post.itemDescription}
                    askingPrice={post.askingPrice}
                    itemDetails={post.itemDetails}
                    pictures={post.pictures}
                />
                )
                
            })}
            <ItemDisplayCard />
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
