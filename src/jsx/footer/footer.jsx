import React from "react";
import s from "./footer.module.css"

function Footer() {
  return (

    <div className={s.footer}>
      <p className={s.par}>maybebanka@gmail.com | +380 508 474 550</p>
      <p className={s.f_sub}>Права інетелектуальної властності "MAYBEBANK.COM"
        захищено Законом України 418 Цивільного кодексу України
        *копия, плагіат вмісту сайта maybebank.com може бути розцінена як навмиста
        крадіжка інтелектуальної власності.</p>
        
    </div>
  );
}

export default Footer;