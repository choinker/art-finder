import React, { useState } from 'react';
import { Container, Row, Form, Button, InputGroup, Spinner, CardColumns, Card, Alert } from 'react-bootstrap';
import ArtCards from './ArtCards';

const Favorites = (props) => {
    const { artworks } = props;
    return (
        <>
            <Row className='mt-2' noGutters>
                <h4>
                    Here you can view, remove, or share your favorites
                </h4>
            </Row>
            {artworks ? 
            (
                <ArtCards artworks={artworks} handleAddFavorite={() => {console.log('fav a flav')}} />
            ) : 
            (
                <div> NO FAVORITES </div>
            )}
        
        </>
    );
};

export default Favorites;