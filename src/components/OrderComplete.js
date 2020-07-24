import React from "react";

export default function OrderComplete({details}) {
  if(!details) {
  return <h3>Making Pizza...</h3> }
  
    return (
      <div>  
        <div>Customer Name: {details.name}</div>
        <div>Sauce: {details.sauces}</div>
        <div>Topping:{details.toppings}</div>
        <div>Special Instructions:{details.instructions}</div>
        <div>Make Gluten Free? {details.gluten}</div>
      </div>
    )
  }
