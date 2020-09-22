import {POST_ITEM} from "../types"

    
export const postItem = item =>{
    return {
        type: POST_ITEM,
        payload: item
    }
}