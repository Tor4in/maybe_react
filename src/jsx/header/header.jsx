import React from "react";
import s from './header.module.css'
import i from "./media/logo_img.jpg"
import '../../zerostyles.css'
import { Link } from "react-router-dom";


const Header = () => {
    let anim_el = React.createRef()
    let bg_manu = React.createRef()
    let weit = () => {
        bg_manu.current.classList.toggle('brg_bg')
        bg_manu.current.classList.toggle('add_off')
    }

    let close = () => {
        bg_manu.current.classList.toggle('brg_bg_closed')

        setTimeout(() => {
            bg_manu.current.classList.toggle('add_off')
            bg_manu.current.classList.toggle('brg_bg_closed')
            bg_manu.current.classList.toggle('brg_bg')
        }, 900)

    }




    let anim_el_state = () => {
        let anim_open = () => {
            anim_el.current.classList.contains('anim_close') ? anim_el.current.classList.toggle('anim_close')
                || anim_el.current.classList.toggle('anim_active') : anim_el.current.classList.toggle('anim_active')

        }
        let anim_close = () => {
            anim_el.current.classList.contains('anim_active') ? anim_el.current.classList.toggle('anim_active')
                || anim_el.current.classList.toggle('anim_close') : anim_el.current.classList.toggle('anim_close')
        }

        anim_el.current.classList.contains('anim_active') ? anim_close() : anim_open()

    }




    let animAdd = () => {
        if (anim_el) {

            anim_el_state()

            bg_manu.current.classList.contains('add_off') ? weit() : close();


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
                                <li><Link to='/sachen/0'>Airpods 2</Link> </li>
                                <li><Link to='/sachen/1'>Airpods 3</Link>  </li>
                                <li><Link to='/sachen/2'>Airpods pro</Link> </li>
                                <li><Link to='/sachen/3'>Watch GS8 mini</Link></li>
                                <li><Link to='/sachen/4'>Watch GS8+ Ultra</Link></li>
                                <li><Link to='/sachen/5'>XO PR1 30</Link></li>
                                <li><Link to='/sachen/6'>Powerbank</Link></li>
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
                        <li> <Link to='/sachen'>Товари</Link></li>

                        <ul className={s.bar}>
                            <li><Link to='/sachen/0'>Airpods 2</Link> </li>
                            <li><Link to='/sachen/1'>Airpods 3</Link>  </li>
                            <li><Link to='/sachen/2'>Airpods pro</Link> </li>
                            <li><Link to='/sachen/3'>Watch GS8 mini</Link></li>
                            <li><Link to='/sachen/4'>Watch GS8+ Ultra</Link></li>
                            <li><Link to='/sachen/5'>XO PR1 30</Link></li>
                            <li><Link to='/sachen/6'>Powerbank</Link></li>
                        </ul>



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
