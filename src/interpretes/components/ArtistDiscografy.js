/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import './../discografia.css';
import { NavLink, useParams } from 'react-router-dom';
import { GeneralContext } from './../../ContextApi/generalContext'
import { RotatingLines } from  'react-loader-spinner';
import { fotoPerfil } from './../../utils/functions';
import { PlantillaPrincipal } from './../../plantilla/PlantillaPrincipal';
import { ActionsMenu } from './../../components/ActionsMenu';
import { ActionsSong } from './ActionsSong';
import { getArtistAlbums, getImgArtist, getSongsAlbums } from './../../userService/endpointsService';
import { ReplyAllIcon } from './../../utils/iconosMui';
import { ViewDiscografy } from './ViewDiscografy';

export const ArtistDiscografy = () => {
    const { generalState, generalDispatch } = useContext(GeneralContext);
    const [datArtist, setDatArtist] = useState({})
    const [respGetArtistAlbums, setRespGetArtistAlbums] = useState({})
    const [respGetImg, setRespGetImg] = useState({});
    const [respGetSongstAlbums, setRespGetSongstAlbums] = useState({});
    const [imgArtista, setImgArtista] = useState('');
    //const [loading, setLoading] = useState(false);
    const idArtist= useParams().id;

    const cargarImgArtist = (idint) => {
        try {
          getImgArtist('interpreteImg', idint, setRespGetImg);
        } catch (error) {
          console.log(error)
        }
    };
    const cargarAlbums = () => {
        //setLoading(true);
        try {
            getArtistAlbums('canciones', idArtist ,setRespGetArtistAlbums);
        } catch (error) {
          
        }
    }
    const cargaSongsAlbum = (idA,nomA) => {
      try {
        getSongsAlbums('canciones', idA, nomA ,setRespGetSongstAlbums);
      } catch (error) {
      
      }
    }
    useEffect(() => {
      cargarAlbums();
      return (() => {
        generalDispatch({
          type: 'FETCH_DISC_SELECT',
          payload: {},
        })
        generalDispatch({
          type: 'FETCH_SONGS_ALBUM',
          payload: {},
        })
      })
    }, []);
    useEffect(()=> {
      if (Object.keys(generalState.discSelect).length >0) {
        console.log('General state --->',generalState);
        cargaSongsAlbum(datArtist.idInterprete, generalState.discSelect.titulo)
      }
    }, [generalState.discSelect])
    useEffect(()=> {
        if (Object.keys(respGetArtistAlbums).length > 0) {
          if (respGetArtistAlbums.status === 200 && respGetArtistAlbums.statusText === "OK") {
            setDatArtist(respGetArtistAlbums.data);
          }
        }
    },[respGetArtistAlbums]);
    useEffect(()=> {
        if(Object.keys(datArtist).length > 0) {
            console.log('datos del artista ->',datArtist);
            cargarImgArtist(datArtist.idInterprete);
            //console.log(datArtist)
        }
    }, [datArtist])
    useEffect(()=>{
        if (respGetImg.status === 200 && respGetImg.statusText === "OK") {
              setImgArtista(respGetImg.data);
        }
    },[respGetImg])
    useEffect(()=> {
      if (Object.keys(respGetSongstAlbums).length > 0) {
        if (respGetSongstAlbums.status === 200 && respGetSongstAlbums.statusText === "OK") {
          console.log(respGetSongstAlbums)
          generalDispatch({
            type: 'FETCH_SONGS_ALBUM',
            payload: respGetSongstAlbums.data,
          })    
        }
      }

    }, [respGetSongstAlbums])
    return (
      <PlantillaPrincipal>
        {Object.keys(generalState.songsAlbum).length > 0 ?
          <ActionsSong />
        :
          <ActionsMenu />
        }
        <div className='detailContainer'>
          {Object.keys(datArtist).length > 0 ?
            <>
              <div className='detailsHeader'>
                <div className='line1'>
                </div>
                <div className='line2'>
                    <NavLink to={"/interpretes"} exact="true">
                    <div className='icono'>
                        <ReplyAllIcon color="primary" /> Volver
                    </div>
                    </NavLink>
                </div>
                <div className='nameArtist'>
                    {datArtist.nombreInterprete}
                </div>
                <div className='img'>
                    {imgArtista !== '' ?
                        <img src={fotoPerfil(`./${imgArtista}`)} alt={datArtist.nombreInterprete} />
                    : null}
                </div>
              </div>
              <div className='albumsContainer'>
                {datArtist.discografia.length > 0 ?
                    datArtist.discografia.map(disco => (
                        <ViewDiscografy key={disco.titulo} disco={disco}/>
                    ))
                : null}
              </div>
            </>
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

            /*
            loading || !loading ? null :
                <div className='detailsHeader'>
                <div className='line1'>
                </div>
                <div className='line2'>
                    <code>No se encontro discografia </code>
                    <NavLink to={"/interpretes"} exact="true">
                    <div className='icono'>
                        <ReplyAllIcon color="primary" /> Volver
                    </div>
                    </NavLink>
                </div>
                </div>
            */
            }
        </div>
      </PlantillaPrincipal>
    );
};