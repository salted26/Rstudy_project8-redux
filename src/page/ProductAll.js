import React, {useCallback, useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";
import {Container, Row, Col} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {

    const [products, setProducts] = useState([]);
    const [ query ] = useSearchParams();

    const getProducts = useCallback( async () => {
        try {
            let searchKeyword = query.get("q") || "";
            let url = `http://localhost:5000/products?q=${searchKeyword}`;
            let response = await fetch(url);
            let data = await response.json();
            console.log(url, data)
            setProducts(data);
        } catch (err) {
            console.log(err);
        }
    },[query])

    useEffect(() => {
        getProducts();
    }, [query, getProducts]);

    return (
        <Container>
            <Row>
                {products?.map((item, index) => (
                    <Col lg={3} key={index} >
                        <ProductCard products={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductAll;