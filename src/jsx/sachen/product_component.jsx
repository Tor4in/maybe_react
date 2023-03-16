import React from "react";
import s from './sachen.module.css';



function Product_Component(props) {
  

  return (

    <div className={s.wraper}>
      <p>{props.text}</p>
      <img src={props.img} alt="" />
    </div>
  );
}

export default Product_Component