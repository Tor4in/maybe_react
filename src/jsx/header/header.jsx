import React from "react";
import s from './header.module.css'
import i from "./media/logo_img.jpg"
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header >
            
            <div className={s.div_logo}>
                <img src={i} alt='img' />
                <p><Link to='/'>Dropshipping </Link> </p>
            </div>
            <div className={s.div_nav__list}>
                <ul >
                    <li> <Link to='/'>Готовна</Link>  </li>
                    <li> <Link to='/sachen'>Товари</Link>
                        <div className={s.bar}>
                            <ul>
                                <li>Airpods 2</li>
                                <li>Airpods 3 </li>
                                <li>Airpods pro </li>
                                <li>Watch GS8 mini</li>
                                <li>Watch GS8+ Ultra</li>
                                <li>XO PR1 30</li>
                                <li>Powerbank</li>
                            </ul>
                        </div>
                       
                    </li>
                    <li> <Link to='/info' >Інфо</Link> </li>
                    <li> <Link to='/form' >Партнерська програма</Link> </li>
                    <li> <Link to='/faq' >FAQ</Link> </li>
                </ul>
            </div>
        </header>

    )
}


export default Header;