import React from "react";


const Cards = ({id, name, email}) => {

  return(
      <div className=" tc bg-light-yellow dib pa1 ma3 grow bw2 shadow-1">
          
          <img alt="robots" src={`https://robohash.org/${id}?set=set3 `} />
              <h2>{name}</h2>
              <h3>{email}</h3>
              
          </div>


      
  ) 
    
}
export default Cards;