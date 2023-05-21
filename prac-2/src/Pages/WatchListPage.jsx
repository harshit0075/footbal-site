import { useSelector } from "react-redux";
import { WatchListCard } from "../Components/WatchListCard";

export const WatchListPage = () => {
  const watchList= useSelector((store)=>store.watchListReducer.watchList)
  
  return (
    
      <div data-testid="watch-list">{
        watchList.length>0&&watchList.map((el)=>{
          return <WatchListCard key={el.id} {...el}/>
        })
      }</div>
    
  );
};
