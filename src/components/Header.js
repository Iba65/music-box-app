/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { NavLink } from "react-router-dom";
import './../css/header.css';
import { logo, musicbox } from '../utils/imagenesApp';

export const Header = ({setGetData}) => {
  
  return (
    <div className='containerUp'>
      <NavLink className="navlink" to={"/"} activeclassname="active" exact="true">
        <img className='logoApp' src={logo} alt="logo" />
      </NavLink>
      <div className='opcContainer'>
        <div className='opcMenuSup'>
          <NavLink className="navlink" to={"/interpretes"} activeclassname="active" exact="true">
            Interpretes
          </NavLink>
          <NavLink className="navlink"  to={"/albums"} activeclassname="active">
            Albums
          </NavLink>
          <NavLink className="navlink"  to={"/generos"} activeclassname="active">
            Generos
          </NavLink>
          <NavLink className="navlink"  to={"/playList"} activeclassname="active">
            PlayList
          </NavLink>
        </div>
        <div className='titleApp'>
          <img className='imgtitle' src={musicbox} alt="Music Box" /> Music Box
        </div>
      </div>
    </div>
  );
};