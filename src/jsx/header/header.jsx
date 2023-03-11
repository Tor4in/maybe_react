import React from "react";
import s from './header.module.css'
import i from "./media/logo_img.jpg"
import '../../zerostyles.css'
import { Link } from "react-router-dom";


const Header = () => {
    let anim_el = React.createRef()
    let bg_manu = React.createRef()

    let animAdd = () => {
        if (anim_el) {

            anim_el.current.classList.toggle('anim_active')
            bg_manu.current.classList.toggle('brg_bg')
            bg_manu.current.classList.toggle('add_off')
        }

    }



    return (
        <header >

            <div className={s.div_logo}>
                <Link to='/'>
                    <img src={i} alt='img' />
                    <p>Dropshipping</p>
                </Link>

            </div>
            <div className={s.div_nav__list}>
                <ul className={s.main_ul}>
                    <li> <Link to='/'>Головна</Link>  </li>
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
                    <li> <Link to='/referal_form' >Партнерська програма</Link> </li>
                    <li> <Link to='/faq' >FAQ</Link> </li>
                </ul>
                <div ref={anim_el} className={s.brg_logo} onClick={animAdd}>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
                <div className="add_off" ref={bg_manu}>

                    <ul className={s.brg_ul_list}>
                        <li> <Link to='/'>Головна</Link>  </li>
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
                        <li> <Link to='/referal_form' >Партнерська програма</Link> </li>
                        <li> <Link to='/faq' >FAQ</Link> </li>
                    </ul>
                </div>
            </div>
        </header>

    )
}


export default Header;