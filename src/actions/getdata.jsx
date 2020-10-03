import axios from "axios";
import { GET_DATA_REQUEST } from "../types";

// GET_DATA_SUCCESS, GET_DATA_ERROR



export const fighterRankingsData = () => {
  const baseUrl = "http://localhost:5000"
  console.log("firing")
   return{
       type: GET_DATA_REQUEST,
       payload: axios.get(baseUrl + "/rankings")
    .then((res)=>{
        console.log(res.data)
        return res.data
    })
    .catch((err=>{
        console.log(err,'uhoh something went wrong :(')
    }))
   }
};

