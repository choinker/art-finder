import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { login } from '../api';

const Login = ({ onLoginSuccessful }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);


    const onEmailChange = (event) => setEmail(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);

    // onSubmit, verify user / pass is good
    const onSubmit = async (event) => {
        event.preventDefault();
        setHasError(false);
        console.log('calling login with: ', email, password);
        const loginResult = await login({ email, password });

        if (!loginResult) {
            setHasError(true);
        }
        else {
            const { name, token } = loginResult;
            localStorage.setItem('name', name);
            localStorage.setItem('token', token);
            onLoginSuccessful();
        }
    };


    // return JSX
    return (
        <Container className='mt-5'>
            <Card>
                <Card.Header as='h1'>
                    Login
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>
                                Email Address
                            </Form.Label>
                            <Form.Control
                                type='email' // This type renders the alert to include a @ sign
                                placeholder='Enter email'
                                onChange={onEmailChange}
                                value={email}
                            />
                            <Form.Text className='text-muted'>
                                (Input a valid email and password '1234' to access, auth is currently mocked)
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                                onChange={onPasswordChange}
                                value={password}
                            />
                        </Form.Group>
                        {hasError && (
                            <Alert variant='danger'>
                                The email address and password you entered don't match any account. Please try again
                            </Alert>
                        )}
                        <Button type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>

            </Card>
        </Container>
    )
}

export default Login;