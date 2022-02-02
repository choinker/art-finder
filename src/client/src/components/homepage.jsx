import React, { useState } from 'react';
import { Container, Row, Form, Button, InputGroup } from 'react-bootstrap';
import { searchArtworks } from '../api';

function Homepage() {
    const [keyword, setKeyword] = useState("");
    const [artworks, setArtworks] = useState([]);

    const onChangeKeyword = (event) => {
        setKeyword(event.target.value);
    };

    const onSearchArtworks = async (event) => {
        event.preventDefault() // TODO: why this here
        const artworks = searchArtworks({ keyword });
        setArtworks(artworks);
    };

    return (
        <Container fluid>
            Container
            <Row nogutters>
                Hey there im a row
                <Form className='w-100 mb-5' onSubmit={onSearchArtworks}>
                    Im a form
                    <InputGroup>
                        Im an input group
                        <Form.Control
                            type="text" // Defines input type
                            placeholder="ex. Monet, O'Keefe, Ancient Greek..."
                            onChange={onChangeKeyword}
                            value={keyword}
                        />
                    
                        
                    </InputGroup>
                </Form>
            </Row>
        </Container>
    )
}

export default Homepage;