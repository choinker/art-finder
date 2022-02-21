import React, { useState } from 'react';
import { Button, CardColumns, Card } from 'react-bootstrap';
import '../App.css';

const ArtCards = (props) => {
    // TODO: consider if I want to use the className='image-container' 
    // to make the whole card, or just the image scale up a bit for an interactive feel
    const {artworks, handleAddFavorite, isFavorites} = props;
    // TODO: update to if artwork is in favorites array, then render the filled heart
    return (
        <CardColumns>
            {artworks.map((artwork, idx) => {
                const {
                    id,
                    title,
                    image_url,
                    artist_display,
                    date_display,
                    medium_display,
                    place_of_origin,
                } = artwork;

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
                                <div style={{display: 'flex', width: '25%', height: '50%', 'justify-content': 'center'}}>
                                    <Button class='btn btn-outline-danger' onClick={() => {handleAddFavorite(artwork)}}>
                                        {!isFavorites ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                            </svg>
                                        )}
                                        
                                    </Button>
                                </div>

                            </div>
                            
                            <Card.Text>
                                <small className='text-muted'> {medium_display} </small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </CardColumns>
    );  
};

export default ArtCards;