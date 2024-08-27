import React, {useCallback, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {productAction} from "../redux/action/productAction";
import {useDispatch} from "react-redux";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showDetail=()=>{
        navigate(`/products/${item.id}`);
    }

    const getProductDetail= useCallback( async () => {
        dispatch(productAction.getProductDetail(item.id))
    }, [item.id, dispatch]);

    useEffect(() => {
        getProductDetail()
    }, [item.id, dispatch, getProductDetail]);

    return (
        <div className="productCard">
            <img src={item?.img} alt={item?.title} onClick={showDetail}/>
            {item?.choice === true ? <p>Conscious Choice</p> : <p>&nbsp;</p> }
            <h5>{item?.title}</h5>
            <p>{item?.price}</p>
            <p>{item?.new === true ? "신제품" : ""}</p>

        </div>
    );
};

export default ProductCard;