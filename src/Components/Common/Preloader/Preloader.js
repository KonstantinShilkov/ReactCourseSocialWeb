import React from 'react';
import preloader from '..//..//..//assets/images/loading-thumb-gif-72.gif'
import s from '..//..//Common/Preloader/Preloader.module.css'

let Preloader =(props)=> {
   return (<div style = {{backgroundColor:''}}>
      <img src={preloader} className={s.preloader} /> 
   </div>
)
   }
export default Preloader

