// import { GET_DIVISIONAL_DATA, GET_DIVISIONAL_DATA_SUCCESS, GET_DIVISIONAL_DATA_ERROR } from "../types";

// const initialState = {
//     data: [],
//     error: ""
// };


// const DivisionalRankingsData = (state = initialState, action) => {
//         switch(action.type) {
//             case GET_DIVISIONAL_DATA:
//             return {
//                 ...state,
//                 data: [
//                     ...state.data,
//                     ...action.payload.champsByDivision
//                 ],
//                 error: ""
//                 }
//             case GET_DIVISIONAL_DATA_SUCCESS:
//             return {
//                 ...state,
//                 data: action.payload,
//                 error: ""
//                 }
//             case GET_DIVISIONAL_DATA_ERROR:
//             return {
//                 ...state,
//                 data:[],
//                 error: "error getting divisional data, check API"
//                 }
//             default:
//                 return initialState;
//         }
// }

// export default DivisionalRankingsData;