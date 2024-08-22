import React, { useState } from 'react'
import "../App.css";
import {Button} from "react-bootstrap";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

const SideBar = ({ menuList, authenticate }) => {

    const [toggle, setToggle] = useState(true)
    const navigate = useNavigate();

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div className="logical-not">
            <Button
                onClick={handleClick}
                variant="information">
                <img src ="https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small_2x/bullet-menu-icon-free-vector.jpg" alt="menu" style={{width:35}}/>
            </Button>

            {!toggle ?
                <ul className="list-group">
                    <li className="list-group-close" onClick={handleClick} style={{cursor: "pointer"}}>
                        <img src="https://img.icons8.com/ios7/600w/000000/delete-sign.png" alt="close" style={{width:20}}/>
                    </li>
                    <li className="list-group-item" onClick={()=> navigate("/login")}>
                        <FontAwesomeIcon icon={faUser}/>&nbsp;{authenticate !== true ? "로그인" : "로그아웃"}
                    </li>
                    {menuList?.map((item, index) => (
                        <li className="list-group-item" key={index}>{item}</li>
                    ))}
                </ul>
                :
                <></>
            }
        </div>
    )
}
export default SideBar;