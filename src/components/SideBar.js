import React, { useState } from 'react'
import "../App.css";
import {Button} from "react-bootstrap";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SideBar = ({ menuList }) => {

    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div className="logical-not">
            <Button
                onClick={handleClick}
                variant="information">
                MENU
            </Button>

            {!toggle ?
                <ul className="list-group">
                    <li className="list-group-close" onClick={handleClick}>
                        <FontAwesomeIcon icon={faTimes} />
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