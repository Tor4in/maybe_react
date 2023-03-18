import React from "react";
import s from './product.module.css';
import pods2_1 from '../../product images/2/IMG_3351.webp'


function Product_Component(props) {


    let el = props.em
    return (

        <div className={s.wraper}>
            <div className={s.product_wrap}>
                <div className={s.swiper_wraper}>
                    {el.images[0]}
                    {console.log(el.images[0])}

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