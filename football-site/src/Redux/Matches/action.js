import axios from "axios";
import { GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "./actionTypes";

const getdatasuccess=(payload)=>{
  return {type:GET_MATCH_SUCCESS,payload}

}

const getdatarequest=()=>{
  return {type:GET_MATCH_REQUEST}
}

const getdatafailure=()=>{
  return {type: GET_MATCH_FAILURE}
}

export const getMatches = (pgno,sort,year) =>(dispatch)=> {
  // Complete the logic
  dispatch(getdatarequest())
  return axios
  .get(
    ` http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches?_limit=10&_page=${pgno}&_sort=${year}&_order=${sort}`
  )
.then((res)=>{
  dispatch(getdatasuccess(res.data))
})
.catch((err)=>{
  dispatch(getdatafailure)
})
};