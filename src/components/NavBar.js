import React, {useEffect} from 'react';
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App-before.css";
import {useNavigate} from "react-router-dom";

const NavBar = ({ authenticate, setAuthenticate }) => {

    const menuList = [ '여성', 'Division', '남성', '신생아&유아아동', 'H&M', 'HomeSale', '지속가능성' ];
    const navigate = useNavigate();

    const checkPage = () =>{
        if(authenticate){
            setAuthenticate(true);
            navigate("/")
        }
        setAuthenticate(false);
        navigate("/login")
    }

    const onSubmit = async (e) => {
        if(e.key === 'Enter'){
            let searchKey = e.target.value;
            navigate(`?q=${searchKey}`);
        }
    }

    useEffect(() => {
    }, []);

    return (
        <div className='nav-bar'>
            <div className="login-group">
                <div className="login-btn" onClick={checkPage}>
                    <div >
                        <FontAwesomeIcon icon={faUser} />&nbsp;{ authenticate !== true ? "로그인" : "로그아웃" }
                    </div>
                </div>
                <div className="logo-img" onClick={()=> navigate("/")}>
                    <img src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg" alt="Logo" style={{width:200}} />
                </div>
            </div>
            <div className="menu-group">
                <div className="menu-list">
                    <ul className="menu-item">
                        {menuList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='search-box'>
                    <input type="text"  onKeyDown={onSubmit} />
                    <FontAwesomeIcon icon={faSearch} width={20}/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;