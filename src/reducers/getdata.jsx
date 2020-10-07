import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR, GET_DIVISIONAL_DATA } from "../types";

const initialState = {
    data: [],
    error: ""
};


const FighterRankingsReducer = (state = initialState, action) => {
    console.log(action.payload, 'from reducer')
        switch(action.type) {
            
            case GET_DATA_REQUEST:
               //index 1 is
            return {
                ...state,
                data: [
                    ...state.data,
                    ...action.payload.p4pFighters
                ],
                error: ""
                }
                //index 0 is division
                case GET_DIVISIONAL_DATA:
                    return {
                        ...state,
                        data: [
                            ...state.data,
                            ...action.payload.champsByDivision
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