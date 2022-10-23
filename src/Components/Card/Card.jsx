import React from "react";
import './Card.css';
export default function Card(props){
    
    return (
        <div className="card">
           <div className="card_img"><img src={props.cardimg} alt="" /></div>
           <div className="card_text">
            <h2>{props.productname}</h2>
            <p>$ {props.price}</p>
            <div className="buttonarea"><button className="add">Add to Cart</button> </div>
           </div>
        </div>
    );
}