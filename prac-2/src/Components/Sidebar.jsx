import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatches } from "../Redux/Matches/action";
export const Sidebar = () => {
  const [order,setOrder]=useState("")
  const [page,setPage]=useState(1)
  const handleSort=(e)=>{
   const value=e.target.value
   setOrder(value)
  }
  
 
  const handlePage = (val) => {
    setPage((prev) => prev + val);
  };
  const dispatch=useDispatch()
  useEffect(()=>{
    const paramObj={
      params:{
         _sort:"year",
         _order:order,
         page,
      }
    }
    dispatch(getMatches(order&&paramObj&&page))
},[order])
  return (
    <DIV>
      <h3>Sort By Year</h3>
      <div onChange={handleSort}>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} defaultChecked={order==="asc"}/>
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 data-testid="page-number">Page No.{page} </h3>
      <button data-testid="previous-page" disabled={page === 1} onClick={()=>handlePage(-1)}>Previous</button>
      <br />
      <br />
      <button data-testid="next-page"  onClick={()=>handlePage(+1)}>Next</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;

  button {
    border: none;
    width: 100px;
    height: 40px;
    background-color: gray;
  }
`;
