import React, { useState, useEffect, useContext} from 'react';
import { GeneralContext } from './../../ContextApi/generalContext'

export const ActionsSong = () => {
  const { generalState } = useContext(GeneralContext);
  const [songs, setSongs] = useState([]);

  useEffect(()=> {
    if (Object.keys(generalState.songsAlbum).length > 0) {
        setSongs(generalState.songsAlbum.canciones);
    }
  }, [generalState.songsAlbum])
  const cambiaFondo = (cual) => {
    const cualo = document.getElementsByClassName('songPosition');
    for(let y=0; y < cualo.length; y++){
        if (y !== cual) {
            cualo[y].style.backgroundColor = 'rgb(189, 189, 189)';    
            cualo[y].style.color = 'crimson';
        } else {
            cualo[cual].style.backgroundColor = 'crimson';
            cualo[y].style.color = 'white';
        }
    }
  }
  return (
    <div className='cardActionSong'>
      <table className='songsList'>
        <tbody>
        {songs.length > 0 ?
            songs.map((title,index) => (
                <tr key={title.titulo} onMouseOver={() =>cambiaFondo(index)}>
                    <td className='songPosition'>
                        {index+1}
                    </td>
                    <td className='songTit'>
                        {title.titulo.length > 28 ?
                            <>
                                {title.titulo.substring(0,27)}...
                            </>
                        :
                            <>
                                {title.titulo}
                            </>
                        }
                        
                    </td>
                    <td className='songt'>{title.duracion}</td>
                </tr>
            ))
        : null}
        </tbody>
      </table>
    </div>
  );
};