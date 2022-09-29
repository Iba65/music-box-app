import * as React from 'react';
import { 
    Paper,
    InputBase,
    IconButton,
    Divider,
   } from './../utils/componentesMui';
import {
  AccountCircleIcon,
  AudiotrackIcon
} from './../utils/iconosMui';

export const SearchElement = () => {
  return (
    <Paper
      component="form"
      sx={{ mt: '1px', p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 30, borderBottom: 'solid 2px gray', borderRight: 'solid 2px gray' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="introduzca artista o canción"
        inputProps={{ 'aria-label': 'introduzca artista o canción' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="artist">
        <AccountCircleIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="song">
        <AudiotrackIcon />
      </IconButton>
    </Paper>
  );
}
