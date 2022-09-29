/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './App.css';
import { MyCardArtist } from './componets/MyCardArtist';
import Footer from './componets/Footer';
import { Header } from './componets/Header';
import { MenuLateral } from './componets/MenuLateral';
import { imgPortada } from './utils/imagenesApp';

function App() {
  const [datArtist, setDatArtist] = useState([])

  const actualizaHeight = (valultimo) => {
    const altoContenedor = document.getElementsByClassName('bodyContainer');
    altoContenedor[0].style.height = `${valultimo}px`;
  }
  const cambiaAlto = (total) => {
    const altoContenedor = document.getElementsByClassName('bodyContainer');
    const altoC = altoContenedor[0].getBoundingClientRect().height;
    if (altoC < total) {
      altoContenedor[0].style.height = `${total+60}px`;
    } else {
      altoContenedor[0].style.height = `${altoC}px`;
    }
  };

  return (
    <div className="container">
      <Header setDatArtist={setDatArtist} />
      <div className='containerMiddel'>
        <div className='menuCont'>
          <MenuLateral />
        </div>
        <div className='bodyContainer'>
          {datArtist.length>0 ?
            <div className='bodyCardArtist'>
                {
                  datArtist.map((artist,indice) => (
                    <MyCardArtist key={artist.id} artist={artist} id={indice} totar={datArtist.length-1} cambiaAlto={cambiaAlto} actualizaHeight={actualizaHeight}/>
                  ))
                }
            </div>
          : 
            <div className='bodyPrincipal'>
              <img className='bodyImg' src={imgPortada} alt="imagen body" />
            </div>
          } 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
