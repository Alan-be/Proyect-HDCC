import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const CardHeroes = ({ data }) => {
    console.log(data, "hola");
    return (
        <div className='GridCards'>
            {data.map((item) => (
                <Card sx={{ maxWidth: 345 }} className='CardsContainer'>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography variant="body2" color="text.secondary"> ID: {item.id}</Typography>
                        <Typography variant="body2" color="text.secondary"> Comics: {item.comics.available}</Typography>
                    </CardActions>
                </Card>

            ))}
        </div>
    );
}
export default CardHeroes;
