import React, { Component } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";

import './FormBuy.css';

class FormBuy extends Component {
    render() {
        return (
            <Container className='table_buy'>
                <Row>
                    <Form>
                        <Col>Mua Vé Nhanh</Col>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Chọn phim</Form.Label>
                            <Form.Control as="select" custom>
                                <option>Demon Slayer The Movie: Mugen Train</option>
                                <option>The Croods 2: A New Age</option>
                                <option>Doraemon: Nobita's New Dinosaur</option>
                                <option>The Banishing</option>
                                <option>Hoa Phong Nguyệt Vũ</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Chọn rạp</Form.Label>
                            <Form.Control as="select" custom>
                                <option>Galaxy Nguyễn Du</option>
                                <option>Galaxy Tân Bình</option>
                                <option>Galaxy Kinh Dương Vương</option>
                                <option>Galaxy Đà Nẵng</option>
                                <option>Galaxy Long Xuyên</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Chọn ngày</Form.Label>
                            <Form.Control as="select" custom>
                                <option>Thứ năm, 10/12/2020</option>
                                <option>Thứ sáu, 11/12/2020</option>
                                <option>Thứ bảy, 12/12/2020</option>
                                <option>Chủ nhật, 13/12/2020</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Chọn suất</Form.Label>
                            <Form.Control as="select" custom>
                                <option>19:30, 2D - Lồng tiếng</option>
                                <option>15:15, 2D - Phụ đề</option>
                                <option>15:15, 2D - Phụ đề</option>
                                <option>15:15, 2D - Phụ đề </option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Buy
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default FormBuy;
