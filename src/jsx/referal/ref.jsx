import {React} from "react";
import s from './ref.module.css';


function Ref() {
    return (
        <div className={s.wraper}>

        <div className={s.title}>
            <p> referral </p>
            <p>Якщо ви бажаєте працювати по системі дропшипінг, вам не потрібно реєструватись у партнерській програмі.</p>
            <p>Достатньо заповнити форму, яка є під кожним товаром на сайті.</p>
        </div>
        <div className={s.main_text}>
            <p>100 UAH з кожного продажу вашого рефералу</p>
            <p>Після заповлення форми вам надається реферальне посилання або реферальний промокод. </p>
            <p>З кожного продажу користувача, що здійснюється за вашими рефералами ви отримуватимете 100 UAH фіксовано. </p>
            <p>Пілся заповнення форми, вам надається доступ до таблиць з продажами ваших рефералів. </p>
        </div>

            <div className={s.form}>
            <form action="#" method="post">
                <div className={s.group_mail_name}>
                    <input type="text" name="email" id="mail" required />
                    <label htmlFor="mail">E-mail</label>
                </div>
                <div className={s.group_mail_name}>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="name">Name</label>
                </div>


                <div className={s.group_social}>
                    <div>
                        <input type="checkbox" name="socil" id="inst" />
                        <label htmlFor="inst" >Instagram</label>
                    </div>
                    <div>
                        <input type="checkbox" name="socil" id="facebook" />
                        <label htmlFor="facebook">Facebook</label>
                    </div>
                    <div>
                        <input type="checkbox" name="socil" id="google" />
                        <label htmlFor="google">Google</label>
                    </div>
                    <div className="telegram">
                        <input type="checkbox" name="socil" id="telegram" />
                        <label htmlFor="telegram">Telegram</label>
                    </div>
                    <div className="other">
                        <input type="checkbox" name="socil" id="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>


                <div className={s.radio}>
                    <input type="radio" name="age" value="-18" id="mehr" />
                    <label htmlFor="mehr">+18</label>
                    <input type="radio" name="age" value="+18" id="billiger" />
                    <label htmlFor="billiger">-18</label>
                </div>


                <div className={s.group_data}>
                    <div className="card">
                        <input type="text" name="cart" id="card" required />
                        <label htmlFor="card">Credir cart Number (when no crypto)</label>
                    </div>
                    <div className="crypto">
                        <input type="text" id="crypto" required />
                        <label htmlFor="crypto">Crypto cyrenci (when no card)</label>
                    </div>
                    <div className="comments">
                        <input type="text" id="coments" required />
                        <label htmlFor="coments">Comments</label>
                    </div>
                </div>
 
                <button>Send</button>
            </form>
        </div>
        </div>
        


    )
}

export default Ref;