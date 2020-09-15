import React from "react";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import BrowseItemsPage from "../components/BrowseItemsPage.jsx";
import FighterFacts from "../components/FighterFacts.jsx";
import FighterRankings from "../components/FighterRankings.jsx";
import HomePage from "../components/HomePage.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";
import SellItemPage from "../components/SellItemPage.jsx";




const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/browse-items" component={BrowseItemsPage}/>
                <Route path="/sell-items" component={SellItemPage}/>
                <Route path="/facts" component={FighterFacts}/>
                <Route path="/Rankings" component={FighterRankings}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
    
);

export default AppRouter;