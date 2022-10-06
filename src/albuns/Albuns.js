import React, { useState, useEffect } from 'react';
import './albums.css';
import { RotatingLines } from  'react-loader-spinner';
import { PlantillaPrincipal } from '../plantilla/PlantillaPrincipal';
import { ActionsMenu } from '../components/ActionsMenu';
import { getAllAlbum } from '../userService/endpointsService';
import { AlbumView } from './components/AlbumView';

export const Albunes = ({dataAlbums}) => {
    const [datAlbum, setDatAlbum] = useState([])
    const [respGetAllAlbum, setRespGetAllAlbum] = useState({})
  
    const cargarAlbunes = () => {
      try {
        getAllAlbum('canciones',setRespGetAllAlbum);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(cargarAlbunes, []);
    useEffect(()=> {
      if (Object.keys(respGetAllAlbum).length > 0) {
        if (respGetAllAlbum.status === 200 && respGetAllAlbum.statusText === "OK") {
            setDatAlbum(respGetAllAlbum.data);
        }
      }
    },[respGetAllAlbum])

    return (
      <PlantillaPrincipal setGetData={setDatAlbum}>
        <ActionsMenu />
        <div className='albumsContainer'>
          <h2>Lista de Albums</h2>
          {datAlbum.length > 0 ?
              datAlbum.map((intal,index) => (
                <AlbumView key={intal.idInterprete} indice={index} intal={intal}/>
              ))
          :
            <div className="loader">
              <RotatingLines
                strokeColor="blue"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              /> 
            </div>

          }
          <div className="margenExtra"></div>
        </div>
      </PlantillaPrincipal>
    );
};