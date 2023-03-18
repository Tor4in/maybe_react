import React from "react";
import s from './product.module.css';



function Product_Component(props) {


    let el = props.em
    
    return (

        <div className={s.wraper}>
            <div className={s.product_wrap}>
                <div className={s.swiper_wraper}>
                    
                    <img src={el.images[0]} alt="" />
                    

                </div>
                <div className={s.text}>
                    <p>{el.title1}</p>
                    <p>{el.title2}</p>

                    <ul>
                        <li>{el.li0}</li>
                        <li>{el.li1}</li>
                        <li>{el.li2}</li>
                    </ul>
                    <p>{el.subtitle0}</p>
                    <p>{el.subtitle1}</p>
                    <p>{el.subtitle2}</p>

                    <ul>
                        <li> {el.li3} </li>
                        <li> {el.li4} </li>
                        <li> {el.li5} </li>
                        <li> {el.li6} </li>
                    </ul>
                </div>
            </div>

            <div className={s.form_wrap}>
            <p>{el.form_title}</p>
            </div>
            

        </div>
    );
}

export default Product_Component