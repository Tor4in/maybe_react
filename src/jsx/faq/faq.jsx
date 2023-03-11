import React from "react";
import s from './faq.module.css'

function FAQ() {
  return (

    <div className={s.wraper}>
      <p>FAQ</p>
      <p className={s.gray}>  Frequently Asked Questions </p>
      <p className={s.b}> Графік роботи </p>
      <p>На пошту maybebanka@gmail.com та Telegram @maybebanka - цілодобово</p>
      <p>Telegram @maybebank_bot допоможе вам.</p>
      <p className={s.b}>Мінамальна сума угоди за крипту</p>
      <p>Залежить від проекту та крипти, яку ви обрали.</p>
      <p>BTC - 1'000 UAH</p>
      <p>ETH - 500 UAH</p>
      <p>USDT 500 UAH  </p>
      <p className={s.sm}>**Якщо транзакція здійснюється з MetaMast,  TrustWallet, комісія гаманця враховується. Для інших гаманців ви оплачуєте додаткову комісію сервіса.</p>
    </div>
  );
}

export default FAQ;