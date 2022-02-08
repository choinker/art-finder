import React, { useState } from 'react';
import { Container, Row, Form, Button, InputGroup, Spinner, CardColumns, Card, Alert } from 'react-bootstrap';
import '../App.css';

const ArtCard = ({artwork}) => {

    const {
        id,
        title,
        image_url,
        artist_display,
        date_display,
        medium_display,
        place_of_origin,
    } = artwork;

    // TODO: consider if I want to use the className='image-container' 
    // to make the whole card, or just the image scale up a bit for an interactive feel
    return (
        <Card key={`artwork-${id}`} >
            <a
                href={image_url}
                target='_blank'
                rel='noreferrer'
                aria-current='true'
            >
                <Card.Img className='image-container' variant='top' src={image_url} />
            </a>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div style={{display: 'flex'}}>
                    <Card.Text
                        className='text-muted'
                        style={{ width: '75%', whiteSpace: 'pre-line'}}
                    >
                        {place_of_origin}, {date_display}
                        <br />
                        <small className='text-muted'> {artist_display} </small> 
                    </Card.Text>
                    <div style={{display: 'flex', width: '25%', 'justify-content': 'end'}}>
                        Heart button
                        Share button
                    </div>

                </div>
                
                <Card.Text>
                    <small className='text-muted'> {medium_display} </small>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ArtCard;