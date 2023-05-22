import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios"
const LoginRequest=()=>{
  return {type:LOGIN_REQUEST}
}
const LoginSuccess=(payload)=>{
  return {type:LOGIN_SUCCESS,payload}
}
const LoginFailure=()=>{
  return {type:LOGIN_FAILURE}
}

export const login = (userData)=>(dispatch) => {
  dispatch(LoginRequest())
  axios.post(`https://reqres.in/api/login`,userData).then((res)=>{
    dispatch(LoginSuccess(res.data))
  }).catch(()=>{
    dispatch(LoginFailure())
  })
};
