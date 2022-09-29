/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import './../css/cardArtist.css';
import { red } from '@mui/material/colors';
import '@fontsource/roboto/300.css';
import { 
    Avatar, 
    IconButton, 
    Typography,
    Button,
} from './../utils/componentesMui';
import { 
    FavoriteIcon,
    ExpandMoreIcon, 
    AlbumIcon,
    RemoveRedEyeIcon
} from './../utils/iconosMui';

const fotoPerfil = require.context('./../data/artista', true);
let selected = -1;

export const MyCardArtist = ({artist, id, totar, cambiaAlto, actualizaHeight}) => {
  //window.scrollTo(x-coord, y-coord)
  React.useEffect(()=> {
    if (totar === id) {
        window.scrollTo(0, 0)
    }
  },[id])
  const handleExpandClick = (idice) => {
        let valTop = 0;
        let valLeft = 0;
        const colapSelected = document.getElementsByClassName('colap');
        const cardSelected = document.getElementsByClassName('cardContainer');
        var y = window.scrollY;
        if (idice === selected && selected !== -1) {
            colapSelected[idice].style.display = 'none';
            const cardultimo = (cardSelected[colapSelected.length-1].getBoundingClientRect().top + cardSelected[colapSelected.length-1].getBoundingClientRect().height)+ y
            actualizaHeight(cardultimo+48)
            selected = -1;
            return;
        }
        for (let xc=0; xc < colapSelected.length; xc++){
            if (xc === idice) {
                valTop = (cardSelected[xc].getBoundingClientRect().top + cardSelected[xc].getBoundingClientRect().height)+ y;
                valLeft = cardSelected[xc].getBoundingClientRect().left;
                colapSelected[xc].style.top = `${valTop}px`
                colapSelected[xc].style.left = `${valLeft}px`
                colapSelected[xc].style.display = 'block'
                const colapseView = document.getElementsByClassName('cardContent');
                cambiaAlto(valTop+colapseView[xc].getBoundingClientRect().height);
                selected = xc;
                //setExpanded(true);
            } else {
                colapSelected[xc].style.display = 'none';
            }
        }
  };

  return (
    <>
      <div className='cardContainer'>
        <div className='cardHeader'>
            <div className='avatar'>
                <Avatar sx={{ bgcolor: red[500], width: 35, height: 35, m: .7 }} aria-label="recipe">
                    {artist.tipo[0]}
                </Avatar>
            </div>
            <div className='title'>
                <h1 className='titleCardmd'>{artist.nombre}</h1>          
            </div>
        </div>
        <div className='carMedia'>
            <img src={fotoPerfil(`./${artist.imageng}`)} alt={artist.nombre} />
        </div>
        <div className='cardActions'>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <AlbumIcon />
            </IconButton>
            <IconButton 
            aria-label="share"
            onClick={() => handleExpandClick(id)}
            >
            <ExpandMoreIcon  />
            </IconButton>
        </div>
      </div>
      <div className={`colap card${artist.id}`}>
        <div className='cardContent'>
            <Typography variant="body2" color="text.secondary">
            {artist.informacion.Descripcion[0]}... 
            <br/>
            <Button className='verMas' sx={{ bgcolor: red[500], mt: 2 }} variant="contained">
                <RemoveRedEyeIcon/> ver mas
            </Button>
            </Typography>
        </div>
      </div>
    </>
  );
}
