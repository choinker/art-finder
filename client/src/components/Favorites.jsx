import React, { useState } from 'react';
import { Container, Row, Form, Button, InputGroup, Spinner, CardColumns, Card, Alert } from 'react-bootstrap';
import ArtCards from './ArtCards';

const Favorites = (props) => {
    const { artworks, handleRemoveFavorite } = props;
    return (
        <>
            <Row className='mt-2' noGutters>
                <h4>
                    Here you can view, remove, or share your favorites
                </h4>
            </Row>
            {artworks.length > 0 ? 
            (
                <ArtCards artworks={artworks} handleAddFavorite={handleRemoveFavorite} />
            ) : 
            (
                <Alert variant='info'>
                    You have not saved any favorites yet, click 'Home' and find something you like!
                </Alert>
            )}
        </>
    );
};

export default Favorites;