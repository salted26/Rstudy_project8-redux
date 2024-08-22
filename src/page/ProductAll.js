import React, {useCallback, useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";
import {Container, Row, Col} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {

    const [products, setProducts] = useState([]);
    const [ query ] = useSearchParams();

    const getProducts = useCallback( async () => {
        try {
            const searchKeyword = query.get('q') || '';
            let url = `https://my-json-server.typicode.com/salted26/Rstudy_project8/products?q=${searchKeyword}`;
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }, [query, setProducts])


    useEffect(() => {
        getProducts();
    }, [query, getProducts]);

    return (
        <Container>
            <Row>
                {products?.map((item, index) => (
                    <Col lg={3} key={index} className="product">
                        <ProductCard products={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductAll;