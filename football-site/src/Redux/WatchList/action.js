import axios from "axios"
import { ADD_TO_WATCHLIST } from "./actionTypes"
const addToWatch=(payload)=>{
    return {type:ADD_TO_WATCHLIST,payload}
}
export const watchList=(id)=>(dispatch)=>{
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches/${id}`).then((res)=>{
        dispatch(addToWatch(res.data))
    })
}