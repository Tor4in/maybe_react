import Form from './jsx/form/form';

import React from 'react';
import './zerostyles.css';
import Header from './jsx/header/header';
import { Routes, Route } from 'react-router-dom';
import Main from './jsx/main/main';
import Sachen from './jsx/sachen/sachen';
import Info from './jsx/info/info';
import FAQ from './jsx/faq/faq';
import Footer from './jsx/footer/footer';


function App() {
  
  
  return ( 

    <div className='bg_image'>
      <Header />
      
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route  path='/sachen' element={<Sachen/>}/>
          <Route path='/info' element={<Info/>} />
          <Route path='/form' element={<Form />} />
          <Route path='/faq' element={<FAQ/>} />
        </Routes>
        
      </div>
      <Footer/>

    </div>
  ); 
}

export default App;
