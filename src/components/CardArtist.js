import * as React from 'react';
import { styled } from '@mui/material/styles';
import './../css/cardArtist.css';
import { red } from '@mui/material/colors';
import '@fontsource/roboto/300.css';
import { 
    Card,
    CardHeader, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Collapse, 
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardArtist = ({artist}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 250, minWidth: 250, margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {artist.tipo[0]}
          </Avatar>
        }
        title={
          <h1 className={ artist.nombre.length > 22 ? 'titleCardmd' : 'titleCard'}>{artist.nombre}</h1>          
        }
        subheader={artist.periodo}
      />
      <CardMedia
        component="img"
        height="194"
        image={fotoPerfil(`./${artist.imageng}`)}
        alt={artist.nombre}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AlbumIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {artist.informacion.Descripcion[0]}... 
            <br/>
            <Button sx={{ bgcolor: red[500] }} variant="contained">
              <RemoveRedEyeIcon/>ver mas
            </Button>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
