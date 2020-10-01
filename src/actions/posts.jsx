import {POST_ITEM} from "../types"
import Axios from "axios"

const baseUrl = "http://localhost:5000"
export const postItem = (item) =>{
    return {
        type: POST_ITEM,
        payload: Axios.post(baseUrl + "/items",{item})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}