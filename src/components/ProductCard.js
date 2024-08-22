import React from 'react';
import {useNavigate} from "react-router-dom";

const ProductCard = ({ products}) => {
    const navigate = useNavigate();

    const showDetail=()=>{
        navigate(`/products/${products.id}`);
    }

    return (
        <div className="productCard">
            <img src={products?.img} alt={products?.title} onClick={showDetail}/>
            {products?.choice === true ? <p>Conscious Choice</p> : <p>&nbsp;</p> }
            <h5>{products?.title}</h5>
            <p>{products?.price}</p>
            <p>{products?.new === true ? "신제품" : ""}</p>

        </div>
    );
};

export default ProductCard;