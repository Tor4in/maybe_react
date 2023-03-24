import React, { useEffect, useState } from "react";
import s from './header.module.css'
import i from "./media/logo_img.jpg"
import '../../zerostyles.css'
import { Link } from "react-router-dom";



const Header = () => {
    let body = document.querySelector('body')
    let anim_el = React.createRef()
    let bg_manu = React.createRef()
    let weit = () => {
        bg_manu.current.classList.toggle('brg_bg')
        bg_manu.current.classList.toggle('add_off')
        body.classList.toggle('overflow')
    }
    let windWidth 
    let prevValue = 0

    setInterval(() => {
        windWidth = window.innerWidth
         
        windWidth >= 704 ? body.classList = '':false
        // bg_manu.current.classList.contains('brg_bg')?body.classList = 'overflow':
        
       
        
        
         

    }, 500);
    
   
    

    let close = () => {
        bg_manu.current.classList.toggle('brg_bg_closed')
        // let windWidth = window.innerWidth
        windWidth<=704?body.classList.toggle('overflow'):false
        

        setTimeout(() => {

            bg_manu.current.classList.toggle('add_off')
            bg_manu.current.classList.toggle('brg_bg_closed')
            bg_manu.current.classList.toggle('brg_bg')
        }, 900)

    }


    const [state, setState] = useState(
        {
            'num' : 0,
            'prevNum' : 0, 
        }
    )

    // setInterval(() => {
    //     let winWidth = window.innerWidth
    //     setState(prev => {
    //         'num'= winWidth, 'provNum' = prev
    //     })
        
    // }, 500);
    
    // state.num <= 704? body.classList = '': state.prevNum >= 704 ? close() : false 

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
    let scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
            close()
            anim_el.current.classList.contains('anim_active') ? anim_el.current.classList.toggle('anim_active')
                || anim_el.current.classList.toggle('anim_close') : anim_el.current.classList.toggle('anim_close')
        }, 1)

    }






    const [linkList, setLinkList] = React.useState([
        {
            'id': 0,
            'text': 'Airpods 2',
            'link': '/sachen/0',
        },
        {
            'id': 1,
            'text': 'Airpods 3',
            'link': '/sachen/1',
        },
        {
            'id': 2,
            'text': 'Airpods pro',
            'link': '/sachen/2',
        },
        {
            'id': 3,
            'text': 'Watch GS8 mini',
            'link': '/sachen/3',
        },
        {
            'id': 4,
            'text': 'Watch GS8+ Ultra',
            'link': '/sachen/4',
        },
        {
            'id': 5,
            'text': 'XO PR1 30',
            'link': '/sachen/5',
        },
        {
            'id': 6,
            'text': 'Powerbank',
            'link': '/sachen/6',
        },
    ])

    let zone = (<div onClick={() => {
        close()
        anim_el.current.classList.contains('anim_active') ? anim_el.current.classList.toggle('anim_active')
            || anim_el.current.classList.toggle('anim_close') : anim_el.current.classList.toggle('anim_close')
    }}></div>)

    let animAdd = () => {

        if (anim_el) {

            anim_el_state()

            bg_manu.current.classList.contains('add_off') ? weit() : close();


        }

    }











    return (

        <header >

            <div className={s.div_logo}>
                <Link to='/' onClick={scrollToTop}>
                    <img src={i} alt='img' />
                    <p>Dropshipping</p>
                </Link>

            </div>
            <div className={s.div_nav__list}>
                <ul className={s.main_ul}>
                    <li > <Link onClick={scrollToTop} to='/'>Головна</Link>  </li>
                    <li > <Link onClick={scrollToTop} to='/sachen'>Товари</Link>
                        <div className={s.bar}>
                            <ul>
                                {linkList.map((obj, index) => (
                                    <li key={index} > <Link onClick={scrollToTop} to={obj.link}>{obj.text}</Link></li>
                                ))}
                            </ul>
                        </div>

                    </li>
                    <li onClick={scrollToTop}> <Link to='/info' >Інфо</Link> </li>
                    <li onClick={scrollToTop}> <Link to='/referal_form' >Партнерська програма</Link> </li>
                    <li onClick={scrollToTop}> <Link to='/faq' >FAQ</Link> </li>
                </ul>
                <div ref={anim_el} className={s.brg_logo} onClick={animAdd}>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
                <div className="add_off" ref={bg_manu}>
                    {zone}
                    <ul className={s.brg_ul_list}>

                        <li > <Link onClick={scrollToTop} to='/'>Головна</Link>  </li>
                        <li > <Link onClick={scrollToTop} to='/sachen'>Товари</Link></li>

                        <ul className={s.bar}>
                            {linkList.map((obj, index) => (
                                <li  onClick={scrollToTop} key={index} > <Link to={obj.link}>{obj.text}</Link></li>
                            ))}
                        </ul>



                        <li > <Link onClick={scrollToTop} to='/info' >Інфо</Link> </li>
                        <li > <Link onClick={scrollToTop} to='/referal_form' >Партнерська програма</Link> </li>
                        <li > <Link onClick={scrollToTop} to='/faq' >FAQ</Link> </li>
                    </ul>
                </div>
            </div>
        </header>

    )
}


export default Header;
