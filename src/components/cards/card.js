import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';


export default function MediaCard(props) {
    axios.get('https://api.unsplash.com/photos/random?client_id=4Zhn8qJzdH87bPHLsuYBvaFKFo47PekfQuCdBILJ7Lg', {
      })
      .then(function (response) {
        console.log(response);
      })
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
        <Button size="small">Know More</Button>
      </CardActions>
    </Card>
  );
}
