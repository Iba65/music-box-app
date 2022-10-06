/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { PlantillaPrincipal } from './../../plantilla/PlantillaPrincipal';
import { ActionsMenu } from './../../components/ActionsMenu';
import { getArtistDetails } from './../../userService/endpointsService';
import { fotoPerfil } from './../../utils/functions';
import { DetailList } from './DetailList';
import { Button } from './../../utils/componentesMui';
import { ReplyAllIcon, RemoveRedEyeIcon } from './../../utils/iconosMui';

export const ArtistDetails = () => {
    const [datArtist, setDatArtist] = useState({})
    const [respGetArtistDetails, setRespGetArtistDetails] = useState({})
    const idArtist= useParams().id;
    const cargarDetalles = () => {
        try {
            getArtistDetails('interpretes', idArtist ,setRespGetArtistDetails);
        } catch (error) {
          
        }
    }
    useEffect(cargarDetalles, []);
    useEffect(()=> {
        if (Object.keys(respGetArtistDetails).length > 0) {
          if (respGetArtistDetails.status === 200 && respGetArtistDetails.statusText === "OK") {
            setTimeout(() => {
                setDatArtist(respGetArtistDetails.data);
            },1000);
            
          }
        }
    },[respGetArtistDetails]);
    useEffect(()=> {
        if(Object.keys(datArtist).length > 0) {
            //console.log(datArtist)
        }
    }, [datArtist])

    return (
        <PlantillaPrincipal>
            <ActionsMenu />
            {Object.keys(datArtist).length > 0 ?
              <div className='detailContainer'>
                <div className='detailsHeader'>
                    <div className='line1'>
                        <span>{datArtist.estilo}</span>
                    </div>
                    <div className='line2'>
                        <NavLink to={"/interpretes"} exact="true">
                        <div className='icono'>
                            <ReplyAllIcon color="primary" /> Volver
                        </div>
                        </NavLink>
                    </div>
                    <div className='nameArtist'>
                        {datArtist.nombre}
                    </div>
                    <div className='img'>
                        <img src={fotoPerfil(`./${datArtist.imageng}`)} alt={datArtist.nombre} />
                    </div>
                </div>
                <div className='infoArtista'>
                    <div className='datosArtist'>
                      <div className='part1'>
                        <div>
                          <code>Origen:</code> {datArtist.informacion.Origen}
                        </div>
                        <div>
                          <code>Web Oficial: </code> 
                          <a href={`http://${datArtist.informacion.OficialWeb}`} rel="noreferrer" target="_blank" >
                            {datArtist.informacion.OficialWeb}
                           </a>
                        </div>
                      </div>
                      <div className='part2'>
                        <div className='columna1'>
                          <code>Generos:</code> <DetailList data={datArtist.informacion.Generos} />
                        </div>
                        <div className='columna2'>
                        <code>Actividad:</code> <DetailList data={datArtist.informacion.Actividad} />
                        </div>
                      </div>
                      <div className='part3'>
                        <div className='columna'>
                            <code>Miembros:</code> <DetailList data={datArtist.informacion.Miembros} />
                        </div>
                      </div>
                    </div>
                    <div className='conciertoFoto'>
                         <img src={fotoPerfil(`./${datArtist.informacion.Fotos[0]}`)} alt={datArtist.nombre} />
                    </div>
                </div>
                <div className='descriptionContent'>
                    <h3>Descripción:</h3>                        
                    {datArtist.informacion.Descripcion.length > 0 ? 
                      <>
                        {datArtist.informacion.Descripcion.map(parrag => (
                            <p>{parrag}</p>
                        ))}
                        <div className='masInfo'>
                          <a href={datArtist.urlwiki} rel="noreferrer" target="_blank" >
                            <Button variant="contained" startIcon={<RemoveRedEyeIcon />} color="error">
                                Mas Información
                            </Button>
                          </a>
                        </div>
                      </>
                    :null}
                </div>
              </div>
            : null}
        </PlantillaPrincipal>
    );
};