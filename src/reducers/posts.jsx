import {POST_ITEM} from "../types"
const ItemReducerDefaultState = {
    userPosts: []
};

const ItemReducer = (state = ItemReducerDefaultState, action) => {
    switch (action.type) {
        case POST_ITEM:
            return {
                ...state,
                userPosts: action.payload
            };
            default:
                return state
        
        
    }
}

export default ItemReducer;