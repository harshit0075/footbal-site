import React from 'react'

export const WatchListCard = ({id,competition,year,team1,team2,team1goals,team2goals}) => {
    return (
        <div className="match-card">
          <img src="https://cdn.pixabay.com/photo/2016/05/20/21/57/football-1406106__340.jpg" alt="imag" className="match-image" width={"200px"}/>
          <p className="competition-name">{competition}</p>
          <p className="match-year">{year}</p>
          <p className="team-1">{team1}-{team1goals}</p>
          <p className="team-2">{team2}-{team2goals}</p>
         
        </div>
      );
}
