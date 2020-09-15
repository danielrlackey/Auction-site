import React from "react";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import BrowseItemsPage from "../components/BrowseItemsPage";
import FighterFacts from "../components/FighterFacts.js";
import FighterRankings from "../components/FighterRankings.js";
import HomePage from "../components/HomePage.js";
import NotFoundPage from "../components/NotFoundPage";
import SellItemPage from "../components/SellItemPage";




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