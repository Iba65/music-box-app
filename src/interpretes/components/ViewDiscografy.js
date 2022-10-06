/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { portada } from './../../utils/functions';
import { 
    Fab,
   } from './../../utils/componentesMui';
   import { 
    PlayArrowIcon,
  } from './../../utils/iconosMui';
import { GeneralContext } from './../../ContextApi/generalContext'
  
export const ViewDiscografy = ({disco}) => {
  const { generalDispatch } = useContext(GeneralContext);
  //console.log(disco);
  const cargaDiscoSelected = () => {
    generalDispatch({
      type: 'FETCH_DISC_SELECT',
      payload: disco,
    });
  }
    
  return (
     <>
      <div className='cardAlbumContent'>
        <div className='imgDiscoAlbums'>
          <img src={portada(`./${disco.imgdisco}`)} alt={disco.disco} />
        </div>
        <div className='datosAlbum'>
          <code>{disco.titulo}</code>
          <span>{disco.anyo}</span>
        </div>
      </div>
      <Fab className='iconoPlay' size="small">
        <PlayArrowIcon color="primary" onClick={() =>cargaDiscoSelected()}/>
      </Fab>
    </>
  );
};