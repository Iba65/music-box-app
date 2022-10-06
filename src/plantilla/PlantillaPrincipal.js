
import * as React from 'react';
import './plantilla.css';
import { Header } from './../components/Header';
import Footer from './../components/Footer';
import { MenuLateral } from './../components/MenuLateral';


export const PlantillaPrincipal = ({children}) => {

    return (
      <div className="container">
        <Header/>
        <div className='containerMiddel'>
          <div className='menuCont'>
            <MenuLateral>
                {children[0]}
            </MenuLateral>
          </div>
          <div className="child">
              <div className="null"></div>
              <div className="body">
                {children[1]}     
              </div>
            </div>
        </div>
        <Footer />
      </div>
    );
};