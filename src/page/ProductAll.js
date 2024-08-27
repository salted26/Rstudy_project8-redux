import React, {useCallback, useEffect} from 'react';
import ProductCard from "../components/ProductCard";
import {Container, Row, Col} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {productAction} from "../redux/action/productAction";

const ProductAll = () => {

    const products = useSelector((state) => state.product.productList);
    const [ query ] = useSearchParams();
    const dispatch = useDispatch();

    const getProducts = useCallback( async () => {
        try {
            const searchKeyword = query.get('q') || '';
            dispatch(productAction.getProducts(searchKeyword));
        } catch (error) {
            console.log(error)
        }
    }, [query, dispatch])


    useEffect(() => {
        getProducts();
    }, [query, getProducts]);

    return (
        <Container>
            <Row>
                {products?.map((item, index) => (
                    <Col lg={3} key={index} className="product">
                        <ProductCard item={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductAll;