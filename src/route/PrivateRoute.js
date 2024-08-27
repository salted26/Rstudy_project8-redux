import React from 'react';
import ProductDetail from "../page/ProductDetail";
import {useSelector} from "react-redux";
import Login from "../page/Login";

const PrivateRoute = () => {
    const authenticate = useSelector((state)=>state.auth.authenticate);
    return authenticate !== true ? <Login /> : <ProductDetail />
};

export default PrivateRoute;