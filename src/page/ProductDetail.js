import React, {useCallback, useEffect, useState} from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import "../App.css"


const ProductDetail = () => {
    let { id } = useParams();
    const [ product, setProduct ] = useState('');

    const getProductDetail= useCallback( async () => {
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }, [id, setProduct])

    useEffect(()=>{
        getProductDetail();
    }, [getProductDetail]);

    console.log(product);

    return (
        <div className='productDetail'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="product_info">
                            <img src ={product?.img} alt={product?.title} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="product_info">
                            <div>
                                <h5><b>{product?.title}</b></h5>
                            </div>
                            <div>{product?.price}</div>
                            <div>
                                <Form.Select size="sm" aria-label="Default select example" style={{width:150}}>
                                    <option>choice size</option>
                                    {product.size?.map((size, index) => (
                                        <option key={index} value={size}>{size}</option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div>{product?.new === true ? "신상품" : ""}</div>
                            <div>
                                <Button variant="dark">추가</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetail;