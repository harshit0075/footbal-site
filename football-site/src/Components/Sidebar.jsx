import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getMatches } from "../Redux/Matches/action";

export const Sidebar = () => {
  const dispatch=useDispatch()
  const [year, setYear]=useState("")
  const [order, setOrder]=useState("")
  const [page, setPage]=useState(1)
  useEffect(()=>{
    dispatch(getMatches(page,order,year))
  },[page,order])
  const handleChange=(e)=>{
    setOrder(e.target.value)
    setYear("year")
  }
  return (
    <DIV>
      <h3>Sort By Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"}
        onChange={(e)=>handleChange(e)} />
         
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={(e)=>handleChange(e)}
        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 data-testid="page-number">Page No.{page} </h3>
      <button data-testid="previous-page" onClick={()=>setPage((prev)=>prev-1)}>Previous</button>
      <br />
      <br />
      <button data-testid="next-page" onClick={()=>setPage((prev)=>prev+1)}>Next</button>
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