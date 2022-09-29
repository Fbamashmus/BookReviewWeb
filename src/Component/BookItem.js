import React from 'react';
import "./BookItem.css";
import star from '../images/star.png';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BookItem(props) {
        return <div className='card'>

                <img src={props.img} className='card--image' alt='Book' />
                <div className='card--stats'>

                        <Typography variant="h7" component="div">
                                <b>Author:{props.author}</b>
                        </Typography>


                        <h5>rating:{props.rating}</h5>

                </div>


                <CardActions>
                        <Button size="small">Read Review</Button>
                </CardActions>

        </div>
}

export default BookItem;