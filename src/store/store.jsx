import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import ItemReducer from "../reducers/posts.jsx";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            posts: ItemReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
