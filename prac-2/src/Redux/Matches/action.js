import { GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "./actionTypes";
import axios from "axios"
const MatchesRequest=()=>{
  return {type:GET_MATCH_REQUEST}
}
const MatchesSuccess=(payload)=>{
  return {type:GET_MATCH_SUCCESS,payload}
}
const MatchesFailure=()=>{
  return {type:GET_MATCH_FAILURE}
}

export const getMatches = (paramObj)=>(dispatch) => {
  dispatch(MatchesRequest());
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches`,paramObj).then((res)=>{
    dispatch(MatchesSuccess(res.data))
    return res.data
  }).catch(()=>{
    dispatch(MatchesFailure())
  })
};
