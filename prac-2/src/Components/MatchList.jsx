import React from "react";
import { useSelector } from "react-redux";
import { MatchCard } from "./MatchCard";
import styled from "styled-components"
export const MatchList = () => {

  const matches= useSelector((store)=>store.matchReducer.matches)
  
  return <DIV data-testid="match-list">{
    matches.length>0&&matches.map((el)=>{
      return <MatchCard key={el.id} {...el}/>
    })
    }</DIV>;
};

const DIV= styled.div`
margin:10px;
width:85%;
display:grid;
grid-template-columns:auto auto auto auto;
grid-gep:10px;
`


