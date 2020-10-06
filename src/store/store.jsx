import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';

// reducers
import ItemReducer from "../reducers/posts.jsx";
import FighterRankingsReducer from "../reducers/getdata.jsx";
// import DivisionalRankingsData from "../reducers/getDivisionData";

export default () => {
    const rootReducer = combineReducers({
            rankings: FighterRankingsReducer,
            // divisionalRankings: DivisionalRankingsData,
            posts: ItemReducer,
    });
    const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

    return store;
};
