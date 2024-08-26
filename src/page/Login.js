import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authAction} from "../redux/action/authAction";

const Login = ({ setAuthenticate }) => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginUser = (e) => {
        e.preventDefault();
        dispatch(authAction.loginUser(username, password));
        navigate("/");
    }

    return (
        <div className="login">
            <Container>
                <Form onSubmit={(e)=>loginUser(e)}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" placeholder="Email" name="email" onChange={(e)=>setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
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