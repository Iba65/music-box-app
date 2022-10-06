import React from 'react';
import './../css/home.css';
import { PlantillaPrincipal } from './../plantilla/PlantillaPrincipal';
import { imgPortada } from './../utils/imagenesApp';
import { ActionsMenu } from './../components/ActionsMenu';


export const Home = () => {
    return (
      <PlantillaPrincipal>
        <ActionsMenu />
        <div className='homeContainer'>
            <img className='bodyImg' src={imgPortada} alt="imagen body" />
        </div>
      </PlantillaPrincipal>

    );
};