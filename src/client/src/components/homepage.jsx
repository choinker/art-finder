import React, { useState } from 'react';
import { Container, Row, Form, Button, InputGroup, Spinner, CardGroup, Card, Alert } from 'react-bootstrap';
import { searchArtworks } from '../api';

function Homepage({ onLogout }) {
    const [keyword, setKeyword] = useState("");
    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [noArtworksFound, setNoArtworksFound] = useState(false);

    const onChangeKeyword = (event) => {
        setKeyword(event.target.value);
    };

    const onSearchArtworks = async (event) => {
        event.preventDefault() // TODO: why this here
        setIsLoading(true);
        const artworks = await searchArtworks({ keyword });
        console.log('andrew: ', artworks);
        setArtworks(artworks);
        setNoArtworksFound(!artworks || !artworks.length)
        setIsLoading(false);
    };

    // TODO: Add the input group prepend
    return (
        <Container fluid>
            <Row>
                <Button variant='outline-danger' onClick={onLogout}>
                    Log out
                </Button>
            </Row>
            <Row>
                <h1>
                    Welcome to Art-Finder!
                </h1>
            </Row>
            <Row className='mt-2'>
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
                        <Button
                            variant='outline-primary'
                            disabled={!keyword}
                            type='submit'
                        >
                            Search artworks
                        </Button>
                    </InputGroup>
                </Form>
            </Row>
            {isLoading && (
                <Row>
                    <Spinner animation='border' variant='primary' />
                </Row>
            )}
            {noArtworksFound && !isLoading ? (
                <Alert variant='info'>
                    No results were found for the entered keyword(s).
                </Alert>
            ) : (
                <CardGroup>
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
                            <Card key={`artwork-${id}`}>
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
                                    <Card.Text
                                        className='text-muted'
                                        style={{ whiteSpace: 'pre-line'}}
                                    >
                                        {place_of_origin}, {date_display}
                                        <br />
                                        <small className='text-muted'> {artist_display} </small>
                                        <Card.Text>
                                            <small className='text-muted'> {medium_display} </small>
                                        </Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardGroup>
            )}
        </Container>
    );
}

export default Homepage;