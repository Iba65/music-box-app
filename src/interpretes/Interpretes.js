/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { RotatingLines } from  'react-loader-spinner';
import './interpretes.css';
import { GeneralContext } from './../ContextApi/generalContext';
import { PlantillaPrincipal } from './../plantilla/PlantillaPrincipal';
import { MyCardArtist } from './../components/MyCardArtist';
import { ActionsMenu } from './../components/ActionsMenu';
import { getAll } from './../userService/endpointsService';

export const Interpretes = () => {
  const { generalDispatch } = useContext(GeneralContext);
  const [datArtist, setDatArtist] = useState([])
    const [respGetAll, setRespGetAll] = useState({})
  
    const cargarInterpretes = () => {
        try {
          getAll('interpretes',setRespGetAll);
        } catch (error) {
          
        }
    }
    useEffect(cargarInterpretes, []);
    useEffect(()=> {
        if (Object.keys(respGetAll).length > 0) {
          if (respGetAll.status === 200 && respGetAll.statusText === "OK") {
            setTimeout(() => {
                setDatArtist(respGetAll.data);
            },1000);
          }
          generalDispatch({
            type: 'FETCH_DISC_SELECT',
            payload: {},
          });      
        }
    },[respGetAll])
    
    const actualizaHeight = (valultimo) => {
      const altoContenedor = document.getElementsByClassName('bodyContainer');
      altoContenedor[0].style.height = `${valultimo}px`;
    }
    const cambiaAlto = total => {
      const altoContenedor = document.getElementsByClassName('bodyContainer');
      const altoC = altoContenedor[0].getBoundingClientRect().height;
      if (altoC < total) {
        altoContenedor[0].style.height = `${total+60}px`;
      } else {
        altoContenedor[0].style.height = `${altoC}px`;
      }
    };
    
    return (
      <PlantillaPrincipal setGetData={setDatArtist}>
        <ActionsMenu />
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
        </div>
      </PlantillaPrincipal>

    );
};