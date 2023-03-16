import React from "react";
import { Link } from "react-router-dom";
import s from './main.module.css';
import '../../zerostyles.css'
import svg from './add.svg';
import wasden_image from './wasden.webp';

import airpods_2 from './media/airpods_2.webp'
import airpods_3 from './media/airpods_3.webp'
import airpods_pro from './media/airpods_pro.webp'
import watch_ultra from './media/watch_ultra.webp'


function Main() {
  

  let el1 = React.createRef()
  
  let imgel = React.createRef()
  let sachel = React.createRef()

  let show = () => { 

    if (el1 && imgel) {
      el1.current.classList.toggle('add_off')
      
      imgel.current.classList.toggle('rotate')
      sachel.current.classList.toggle('add_off')
      sachel.current.classList.toggle('add')
    }
  }







  return (

    <div className={s.main_wraper}>
      <div className={s.wraper_title}>

        <p className={s.main_name}> maybe</p>
        <p className={s.main_name_sub}>Обери товар, створи магазин, починай продавати.</p>
      </div>

      <div className={s.sachen}>
        <div>
          <Link to="/sachen">
            <div><img src={airpods_2} alt="" /></div>
            
            <p>600</p>
          </Link>
        </div>

        <div>
          <Link to="/sachen">
          <div><img src={airpods_3} alt="" /></div>
            <p>300</p>
          </Link>
        </div>
        <div>
          <Link to="/sachen">
          <div><img src={airpods_pro} alt="" /></div>
            <p>300</p>
          </Link>
        </div>
        <div ref={el1} className='add_off'>
          <Link to="/sachen">
          <div><img src={watch_ultra} alt="" /></div>
            <p>500</p>
          </Link>
        </div>
        
      </div>
      <div className={s.add_wrap}>
        <div className={s.add} ref={imgel} >
          <img src={svg} alt="" onClick={show} />
        </div>
        <div className="add_off" ref={sachel}>
          <Link to='/sachen'> <img src={svg} alt="" onClick={show} /></Link>
        </div>
      </div>

      <div className={s.info_bank}>
        <img src={wasden_image} alt="" />
        <p>Виникли питання?</p>

        <p><Link>Банк інформації</Link></p>
      </div>

    </div>
  );
}

export default Main;
