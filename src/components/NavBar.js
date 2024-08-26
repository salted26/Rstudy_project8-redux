import React, {useRef} from 'react';
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import {useNavigate} from "react-router-dom";
import SideBar from "./SideBar";

const NavBar = ({ authenticate, setAuthenticate }) => {

    const menuList = [ '여성', 'Division', '남성', '신생아&유아아동', 'H&M', 'HomeSale', '지속가능성' ];
    const navigate = useNavigate();
    const keywordRef = useRef();

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
            let searchKey = keywordRef.current.value;
            navigate(`?q=${searchKey}`);
        }
    }

    const handleSearch = () => {
        keywordRef.current.value="";
        navigate(`/`);
    }

    return (
        <div className="nav">
            <div className='nav-bar'>
                <div className="login-group">
                    <div className="login-btn" onClick={checkPage}>
                        <div>
                            <FontAwesomeIcon icon={faUser}/>&nbsp;{authenticate !== true ? "로그인" : "로그아웃"}
                        </div>
                    </div>
                    <div className="logo-img" onClick={handleSearch}>
                        <img src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg" alt="Logo"
                             style={{width: 200}}/>
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
                        <input type="text" onKeyDown={onSubmit} ref={keywordRef}/>
                        <FontAwesomeIcon icon={faSearch} width={20}/>
                    </div>
                </div>
            </div>
            <div className="toggle">
                <SideBar menuList={menuList} authenticate={authenticate}/>
            </div>
        </div>
)
    ;
};

export default NavBar;