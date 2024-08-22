import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Login = ({ setAuthenticate }) => {

    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        setAuthenticate(true);
        navigate("/");
    }

    return (
        <div className="login">
            <Container>
                <Form onSubmit={(e)=>loginUser(e)}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Email" name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Check type="checkbox" label="Check me out" name="check" />
                    </Form.Group>
                    <Button variant="danger" type="submit" >로그인</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;