import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../types";

const initialState = {
    data: [],
    error: ""
};


const FighterRankingsReducer = (state = initialState, action) => {
        switch(action.type) {
            case GET_DATA_REQUEST:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ],
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