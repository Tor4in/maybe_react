import React from "react";
import { Link } from "react-router-dom";
import s from './main.module.css';
import '../../zerostyles.css'
import svg from './add.svg';


function Main() {


  let el1 = React.createRef()
  let el2 = React.createRef()
  let imgel = React.createRef()

  let show = () => {

    if (el1 && el2 && imgel) {
      el1.current.classList.toggle('add_off')
      el2.current.classList.toggle('add_off')
      imgel.current.classList.toggle('rotate')

    }
  }







  return (

    <div className={s.main_wraper}>
      <p className={s.main_name}> maybe</p>
      <p className={s.main_name_sub}>Обери товар, створи магазин, починай продавати.</p>
      <div className={s.sachen}>
        <div>
          <Link to="/sachen">
            <div></div>
            <p>600</p>
          </Link>
        </div>
        <div>
          <Link to="/sachen">
            <div></div>
            <p>400</p>
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
            <p>350</p>
          </Link>
        </div>
        <div ref={el1} className='add_off'>
          <Link to="/sachen">
            <div></div>
            <p>650</p>
          </Link>
        </div>
        <div ref={el2} className='add_off'>
          <Link to="/sachen">
            <div></div>
            <p>250</p>
          </Link>
        </div>
      </div>
      
      <div className={s.add} ref={imgel} >
        <img src={svg} alt="" onClick={show} />
      </div>
      <div className={s.info_bank}>
        <p>Виники питання?</p>
        
        <p><Link>Банк інформації</Link></p>
      </div>
      
    </div>
  );
}

export default Main;
