import Ref from './jsx/referal/ref';

import React from 'react';
import './zerostyles.css';
import Header from './jsx/header/header';
import { Routes, Route } from 'react-router-dom';
import Main from './jsx/main/main';
import Sachen from './jsx/sachen/sachen';
import Info from './jsx/info/info';
import FAQ from './jsx/faq/faq';
import Footer from './jsx/footer/footer';
import Product_Component from './jsx/sachen/product_component';
import pods2_1 from './product images/2/IMG_3317.webp'
import pods2_2 from './product images/2/IMG_3322.webp'



function App() {

  
  const productList = [
    {
      'images': [ pods2_1, pods2_2],
      'title1': 'Навушники AirPods 2',
      'title2': ' Lux Copy',
      
      'li0': '1800 - рекомендована роздрібна ціна',
      'li1': '1300 - дроп ціна',
      'li2': '500 - маржа',
      'subtitle0': ' AirPods 2 (lux копія)',
      'subtitle1': ' 1:1 до оригіналу',
      'subtitle2': ' Найдопрацьованіша версія навушників з 100% оригінальним мікрофон та звуком❗️',
      'li3': 'Для iOS та android',
      'li4': '️Форми / Розміри 1:1 з оригіналом',
      'li5': '️Картонна ваночка, оригінальна комплектація + 3 серійних номера',
      'li6': '️сенсори дотику, тапи, автовиявлення вуха, керування мікрофоном',
      'form_title': 'Стежте за відповідями. Вся необхідна інформація буде надіслана на вказану електронну пошту',




    }
  ]





  return (

    <div className='bg_image'>
      <Header />

      <div className='content'>
        
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sachen' element={<Sachen />} />
          {/* eslint-disable-next-line */}
          <Route path='/sachen/0' element={<Product_Component em={productList[0]} />} />


          <Route path='/info' element={<Info />} />
          <Route path='/referal_form' element={<Ref />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>

      </div>
      <Footer />

    </div>
  );
}

export default App;
