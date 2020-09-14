import React from "react";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import HomePage from "../components/Home-Page.js";



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
            </Switch>
        </div>
    </BrowserRouter>
    
);

export default AppRouter;