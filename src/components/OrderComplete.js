import React from "react";

export default function OrderComplete({details}) {
  if(!details) {
  return <h3>Making Pizza...</h3> }
  
    return (
      <div>  
        <br></br>
        <div>Customer Name: {details.name}</div>
        <div>Size: {details.size}</div>
        <div>Sauce: {details.sauces}</div>

        {
          !!details.toppings && !!details.toppings.length &&
          <div>
            Toppings:
            <ul>
                {details.toppings.map((like, idx) => 
                <li key={idx}>{like}</li>)}
              </ul>
          </div>
        }
    
        <div>Special Instructions:{details.instructions}</div>
      </div>
    )
  }
