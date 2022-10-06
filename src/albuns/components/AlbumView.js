/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { 
  IconButton, 
} from './../../utils/componentesMui';
import { 
  HeadsetIcon,
} from './../../utils/iconosMui';
import { getImgArtist } from './../../userService/endpointsService';
import { portada } from './../../utils/functions';

const fotoFondo = require.context('./../../data/artista', true);

export const AlbumView = ({indice, intal}) => {
    const [respGetImg, setRespGetImg] = useState({});
    const [imgArtista, setImgArtista] = useState('')
    const cargarImgArtist = () => {
        try {
          getImgArtist('interpreteImg',intal.idInterprete,setRespGetImg);
        } catch (error) {
          console.log(error)
        }
    };
    useEffect(cargarImgArtist, []);
    useEffect(()=>{
      if (respGetImg.status === 200 && respGetImg.statusText === "OK") {
        setTimeout(() => {
            setImgArtista(respGetImg.data);
        },1000);
            
      }
    },[respGetImg])
    useEffect(()=> {
     if(imgArtista !== '') {
        const cardimg = document.getElementsByClassName('cardAlbumContainer');
        const url = fotoFondo(`./${imgArtista}`);
        //console.log(intal);
        cardimg[indice].style.backgroundImage = `linear-gradient(to right, rgba(255, 255, 255, 0.216) 0%, #00000091 45%, #000000 70%),  url(${url})`;
     }
    }, [imgArtista])
    useEffect(()=> {
      const cardHeight = document.getElementsByClassName('cardAlbumContainer');
      const cardtit = document.getElementsByClassName('intername');
      cardtit[indice].style.top = `${-(cardHeight[indice].getBoundingClientRect().height+15)}px`
      const titancho = (intal.nombreInterprete.length)*14;
      cardtit[indice].style.width = `${titancho}px`
    },[intal])
    return (
      <>
        {intal.discografia.length > 0 ?
          <>
            <div className='cardAlbumContainer'>
              <div className='margenizdo'></div>
              <div className='margendcho'>
              {intal.discografia.map(disco => (
                <>
                <div key={disco.titulo} className='cardAlbum'>
                  <div className='titulo'>
                    {disco.titulo}
                  </div>
                  
                  <div className='imgAlbum'>
                    <img src={portada(`./${disco.imgdisco}`)} alt={disco.disco} />
                  </div>
                  
                  <div className='accionesAlbum'>
                    <div className='anyoAlbum'>{disco.anyo}</div>
                    <div className='escucharAlbum'>
                      <IconButton aria-label="share">
                        <HeadsetIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
                </>
              ))}
              </div>
            </div>
            <div className='intername'>
              {intal.nombreInterprete}
            </div>
          </>
        :null}
      </>
  );
};