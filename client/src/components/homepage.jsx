import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button, InputGroup, Spinner, CardColumns, Card, Alert } from 'react-bootstrap';
import { searchArtworks } from '../api';
import ArtCards from './ArtCards';
import Favorites from './Favorites';

const Homepage = ({ onLogout }) => {
    const [keyword, setKeyword] = useState("");
    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [noArtworksFound, setNoArtworksFound] = useState(false);
    const [scene, setScene] = useState("home");
    const [favorites, setFavorites] = useState([]);

    const onChangeKeyword = (event) => {
        setKeyword(event.target.value);
    };

    const onSearchArtworks = async (event) => {
        event.preventDefault() // TODO: why is this here
        setIsLoading(true);
        const artworks = await searchArtworks({ keyword });
        console.log('andrew: ', artworks);
        setArtworks(artworks);
        setNoArtworksFound(!artworks || !artworks.length)
        setIsLoading(false);
    };

    const addFavoriteMovie = (movie) => {
        // TODO: add check for if art is already in list, to not add it
        setFavorites([...favorites, movie]);
        console.log('andrew favs: ', favorites);
    }

    const printState = useEffect(() => {
        console.log('andrew state of artworks: ', artworks);
        console.log('andrew state of favorites: ', favorites);

    }, [artworks, favorites])

    // TODO: Break this down into more components, TopNav (includes buttons), Home, Favorites
    return (
        <Container fluid>
            <Row className='mt-2 mb-2 justify-content-end'>
                {scene === 'home' ? (
                    <Button onClick={() => {setScene('favorites')}}>
                        Favorites
                    </Button>
                ) : (
                    <Button onClick={() => {setScene('home')}}>
                        Home
                    </Button>
                )}
                <Button variant='outline-danger' onClick={onLogout}>
                    Log out
                </Button>
            </Row>
            <Row className='justify-content-center' noGutters>
                <h1>
                    Welcome to Art-Finder!
                </h1>
            </Row>
            {scene === 'home' && (
                <div>
                    <Row className='mt-2' noGutters>
                        <h4>
                            Enter one or multiple keywords below to search for artwork in the Art Institute of Chicago.
                        </h4>
                    </Row>
                    <Row noGutters>
                        <Form className='w-100 mb-5' onSubmit={onSearchArtworks}>
                            <InputGroup>
                                <Form.Control
                                    type="text" // Defines input type
                                    placeholder="ex. Monet, O'Keefe, Ancient Greek..."
                                    onChange={onChangeKeyword}
                                    value={keyword}
                                />
                                <InputGroup.Prepend>
                                    <Button
                                        variant='outline-primary'
                                        disabled={!keyword}
                                        type='submit'
                                    >
                                        Search artworks
                                </Button>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form>
                    </Row>
                    {isLoading && (
                        <Row className='justify-content-center mb-5' >
                            <Spinner animation='border' variant='primary' />
                        </Row>
                    )}
                    {noArtworksFound && !isLoading ? (
                        <Alert variant='info'>
                            No results were found for the entered keyword(s).
                        </Alert>
                    ) : (
                        <ArtCards 
                            artworks={artworks} 
                            handleAddFavorite={addFavoriteMovie} 
                        />
                    )}
                </div>
            )}
            {scene === 'favorites' && (
                <Favorites artworks={favorites} />
            )}
            
        </Container>
    );
}

export default Homepage;

/*
<Card key={`artwork-${id}`} >
                                <a
                                    href={image_url}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-current='true'
                                >
                                    <Card.Img variant='top' src={image_url} />
                                </a>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <div>
                                        <Card.Text
                                            className='text-muted'
                                            style={{ whiteSpace: 'pre-line'}}
                                        >
                                            {place_of_origin}, {date_display}
                                            <br />
                                            <small className='text-muted'> {artist_display} </small> 
                                        </Card.Text>
                                        <div styles={{
                                            display: 'flex',
                                            width: '100%',
                                            'justify-content': 'right',
                                        }}>
                                            Heart button
                                        </div>

                                    </div>
                                    
                                    <Card.Text>
                                        <small className='text-muted'> {medium_display} </small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
*/


/*
<Row className='justify-content-center' noGutters>
                <h1>
                    Welcome to Art-Finder!
                </h1>
            </Row>
            <Row className='mt-2' noGutters>
                <h4>
                    Enter one or multiple keywords below to search for artwork in the Art Institute of Chicago.
                </h4>
            </Row>
            <Row noGutters>
                <Form className='w-100 mb-5' onSubmit={onSearchArtworks}>
                    <InputGroup>
                        <Form.Control
                            type="text" // Defines input type
                            placeholder="ex. Monet, O'Keefe, Ancient Greek..."
                            onChange={onChangeKeyword}
                            value={keyword}
                        />
                        <InputGroup.Prepend>
                            <Button
                                variant='outline-primary'
                                disabled={!keyword}
                                type='submit'
                            >
                                Search artworks
                        </Button>
                        </InputGroup.Prepend>
                    </InputGroup>
                </Form>
            </Row>
            {isLoading && (
                <Row className='justify-content-center mb-5' >
                    <Spinner animation='border' variant='primary' />
                </Row>
            )}
            {noArtworksFound && !isLoading ? (
                <Alert variant='info'>
                    No results were found for the entered keyword(s).
                </Alert>
            ) : (
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
                            <ArtCard artwork={artwork} />
                        );
                    })}
                </CardColumns>
            )}
*/