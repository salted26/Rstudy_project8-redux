import React, {useCallback, useEffect} from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {productAction} from "../redux/action/productAction";

const ProductDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.product);

    const getProductDetail= useCallback( async () => {
        dispatch(productAction.getProductDetail(id))
    }, [id, dispatch])

    useEffect(()=>{
        getProductDetail();
    }, [id, dispatch, getProductDetail]);

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
                            <div>{ product?.choice === true ? "Conscious Choice" : ""}</div>
                            <div>₩ {product?.price}</div>
                            <div>
                                <Form.Select size="sm" aria-label="Default select example" style={{width:150}}>
                                    <option value="">사이즈</option>
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
