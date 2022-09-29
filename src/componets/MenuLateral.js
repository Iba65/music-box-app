// @flow 
import * as React from 'react';
import './../css/menuLataral.css';
import * as imagenes from './../utils/imagenesApp';
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

import { ActionsMenu } from './ActionsMenu';


export const MenuLateral = () => {
  const progress = 60;
    return (
      <>
        <div className='menuContainer'>
          <ActionsMenu />
        </div>
        <div className="musicControl">
          <div className='imgSongActive'>
            <img src={imagenes.sinPortada} alt='sin portada'/>
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