import React from 'react';
import './../css/footer.css';
import { 
  LinearProgress,
 } from './../utils/componentesMui';
 import { 
  CopyrightIcon, 
 } from './../utils/iconosMui';
 import { SearchElement } from './../componets/SearchElement.js';

function Footer() {
  const progress = 50;

  return (
    <div className='containerDown'>
      <div className='footerContainer'>
        <div className='songTitle'>
          <p>Titulo de la Cancion</p>
        </div>
        <div className='lineaProgreso'>
          <LinearProgress variant="determinate" value={progress} />
        </div>
        <div className='songTime'>
          <p>00:00</p>
        </div>
      </div>
      <div className='footerActions'>
        <SearchElement />
        <div className='copyright'>
          <CopyrightIcon color='primary' /><p>Ignacio Miguel Ballester Abril</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
