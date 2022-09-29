/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './../css/header.css';
import getAll from './../userService/endpointsService';
import { logo, musicbox } from './../utils/imagenesApp';

export const Header = ({setDatArtist}) => {
  const [respGetAll, setRespGetAll] = useState({})
  const cargarInterpretes = () => {
    try {
      getAll('interpretes',setRespGetAll);
    } catch (error) {
      
    }
  }
  useEffect(()=> {
    if (Object.keys(respGetAll).length > 0) {
      if (respGetAll.status === 200 && respGetAll.statusText === "OK") {
        setDatArtist(respGetAll.data);
      }
    }
  },[respGetAll])

  return (
    <div className='containerUp'>
      <img className='logoApp' src={logo} alt="logo" />
      <div className='opcContainer'>
        <div className='opcMenuSup'>
          <ul>
              <li onClick={cargarInterpretes}>Interpretes</li>
              <li>Albunes</li>
              <li>Generos</li>
              <li>PlayList</li>
          </ul>
        </div>
        <div className='titleApp'>
          <img className='imgtitle' src={musicbox} alt="Music Box" /> Music Box
        </div>
      </div>
    </div>
  );
};