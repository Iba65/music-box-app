/* eslint-disable react-hooks/exhaustive-deps */
// @flow 
import React, { useContext, useEffect, useState } from 'react';
import './../css/menuLataral.css';
import * as imagenes from './../utils/imagenesApp';
import { portada } from './../utils/functions';
import { 
  Fab,
  LinearProgress
 } from './../utils/componentesMui';
 import { 
  SkipPreviousIcon,
  PlayArrowIcon,
  PauseIcon,
  SkipNextIcon,
  VolumeUpIcon,
  VolumeOffIcon,
} from './../utils/iconosMui';
import { GeneralContext } from './../ContextApi/generalContext'


export const MenuLateral = ({children}) => {
  const { generalState } = useContext(GeneralContext);
  const [portadaDisco, setPortadaDisco] = useState('');
  const [songs, setSongs] = useState([]);
  const progress = 0;

  useEffect(()=> {
    if (Object.keys(generalState.discSelect).length > 0) {
      console.log('ipod-->',generalState);
      setPortadaDisco(generalState.discSelect.imgdisco);
    } else {
      setPortadaDisco('');
    }
  },[generalState.discSelect])
  useEffect(()=>{
    if (Object.keys(generalState.songsAlbum).length > 0) {
      setSongs(generalState.songsAlbum.canciones)
      console.log('canciones -->', generalState.songsAlbum.canciones);
    }
  }, [generalState.songsAlbum])

    return (
      <>
        <div className='menuContainer'>
          {children}
        </div>
        <div className="musicControl">
          <div className='imgSongActive'>
            {portadaDisco !== '' ?
              <img src={portada(`./${portadaDisco}`)} alt='Portada Disco' />
            :
              <img src={imagenes.sinPortada} alt='sin portada'/>
            }
          </div>
          <div className='titleCd'>
            Titulo del CD
          </div>
          <div className='soudControls'>
            <div className='sonidoOnOff'>
              <VolumeUpIcon color="primary" />
            </div>
            <div className='volumenLevel'>
              <LinearProgress variant="determinate" value={progress} />
            </div>
          </div>
          <div className='playControls'>
            <Fab className='imgprevio' size="small">
              <SkipPreviousIcon color="primary" />
            </Fab>
            <Fab className='imgctr' aria-label="like" size="small">
              <VolumeOffIcon color="primary" />
            </Fab>
            <Fab className='imgnext' aria-label="like" size="small">
              <SkipNextIcon color="primary" />
            </Fab>
            <Fab className='imgplay' size="small">
              <PlayArrowIcon color="primary" />
            </Fab>
            <Fab className='imgpause' size="small">
              <PauseIcon color="primary" />
            </Fab>
          </div>
        </div>
      </>
    );
};