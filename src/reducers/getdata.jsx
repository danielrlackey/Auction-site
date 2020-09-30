import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../types";

const initialState = {
    data: [],
    error: ""
};

const FighterRankingsReducer = (state = initialState, action) => {
         console.log(action)
        switch(action.type) {
            case GET_DATA_REQUEST:
                console.log("hellooo")
                console.log('from the reducer')
                console.log(action.payload)
            return {
                ...state,
                data: [],
                error: ""
                }
            case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: ""
                }
            case GET_DATA_ERROR:
            return {
                ...state,
                data:[],
                error: "error getting data, check API"
                }
            default:
                return initialState;
        }
}

export default FighterRankingsReducer