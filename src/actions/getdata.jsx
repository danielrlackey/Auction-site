import axios from "axios";
import { GET_DATA_REQUEST } from "../types";

// GET_DATA_SUCCESS, GET_DATA_ERROR



export const fighterRankingsData = () => {
    console.log('from the action')
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
   return{
       type: GET_DATA_REQUEST,
       payload: axios.get(url)
    .then((res)=>{

        return res.data
    })
    .catch((err=>{
        console.log(err,'uhoh something went wrong :(')
    }))
   }
};

