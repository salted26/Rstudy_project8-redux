import React from 'react';
import {Button} from 'react-bootstrap';
import '../App-before.css';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const LoginBefore = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm()

    const handleLogin = async (data) => {
        let url = "http://localhost:5000/user";
        let response = await fetch(url, data)
        let userInfo = await response.json()

        if(userInfo.length === 1 && userInfo[0].id === data.id){
            alert("로그인 성공");
            navigate("/");
        } else {
            alert("로그인 실패");
            return null;
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className='login-container'>
                    <input type="text" className="login-input" placeholder="아이디" {...register("id")} />
                    <input type="password" className="login-input" placeholder="비밀번호" {...register("password")} />
                    <div className="login-bottom">
                        <Button variant="danger" type="submit">로그인</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginBefore;