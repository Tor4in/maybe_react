import React from "react";
import s from './sachen.module.css';
import { Link } from 'react-router-dom';
import Product from "./product_component";
import i from './add.svg'

function Sachen() {
  let el1 = {
      'name': "Vitali",
      'text': 'hello',
      'img': [i, i,],

  }

  return (

    <div className={s.wraper}>
      <p className={s.first_subt}>Товари для дропшипінгу</p>
      <div className={s.sachen}>
        <div >
          <Link to="/sachen">
            <div></div>
            <p>600</p>
          </Link>
        </div>
        <div >
          <Link to="/sachen">
            <div></div>
            <p>300</p>
          </Link>
        </div>

        <div>
          <Link to="/sachen">
            <div></div>
            <p>300</p>
          </Link>
        </div>
        <div>
          <Link to="/sachen">
            <div></div>
            <p>500</p>
          </Link>
        </div>
        <div >
          <Link to="/sachen">
            <div></div>
            <p>500</p>
          </Link>
        </div>

        <div>
          <Link to="/sachen">
            <div></div>
            <p>600</p>
          </Link>
        </div>
        
        

       
      </div>
      <div className={s.subscrypt}>
      <p>***) - рекомендована маржинальність товару (чистий прибуток з одного продажу)</p>
      <p>Перед початком співпраці - <Link to='/info'>ІНФО</Link> </p>
      </div>
      <p className={s.drop}>drop</p>
      <Product text={el1.text} img={el1.img[0]}/>
    </div>
  );
}

export default Sachen;