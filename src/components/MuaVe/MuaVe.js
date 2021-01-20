import React, { Component } from "react";
import { Tabs, Tab, Col, Row, Container } from "react-bootstrap";

import img1 from "../../assest/img/rv1.jpg";

class MuaVe extends Component {
    state = {
        mua_ve_theo_rap: [
            {
                title: "CHỌN RẠP",
                content: [
                    {
                        item: "Nguyễn Du",
                        img: ''
                    },
                    {
                        item: "Nguyễn Du",
                        img: ''
                    },
                    {
                        item: "Nguyễn Du",
                        img: ''
                    },
                    {
                        item: "Nguyễn Du",
                        img: ''
                    },
                    {
                        item: "Nguyễn Du",
                        img: ''
                    },
                    {
                        item: "Nguyễn Du",
                        img: ''
                    },
                ],
            },
            {
                title: "CHỌN PHIM",
                content: [
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                        img: img1
                    },
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                        img: img1
                    },
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                        img: img1
                    },
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                        img: img1
                    },
                ],
            },
            {
                title: "CHỌN SUẤT",
                content: [
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                        img: ''
                    },
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                        img: ''
                    },
                ]
            },
        ],



        mua_ve_theo_phim: [
            {
                title: "CHỌN RẠP",
                content: [
                    {
                        item: "Nguyễn Du",
                    },
                    {
                        item: "Nguyễn Du",
                    },
                    {
                        item: "Nguyễn Du",
                    },
                    {
                        item: "Nguyễn Du",
                    },
                    {
                        item: "Nguyễn Du",
                    },
                    {
                        item: "Nguyễn Du",
                    },
                ],
            },
            {
                title: "CHỌN PHIM",
                content: [
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                    },
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                    },
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                    },
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                    },
                ],
            },
            {
                title: "CHỌN SUẤT",
                content: [
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                    },
                    {
                        item: "Demon Slayer The Movie: Mugen Train",
                    },
                ]
            },
        ],
    };

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="THEO RẠP">
                        <Container>
                            <Row>
                                {this.state.mua_ve_theo_rap.map((item) => {
                                    return (
                                        <Col>
                                            <h3>{item.title}</h3>
                                            <ul>
                                                {item.content.map(
                                                    (list_content) => {
                                                        return (
                                                            <li  className='d-flex'>
                                                                <img src={list_content.img} alt=""/>
                                                                {list_content.item}
                                                                
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="profile" title="THEO PHIM">
                    <Container>
                            <Row>
                                {this.state.mua_ve_theo_rap.map((item) => {
                                    return (
                                        <Col>
                                            <h3>{item.title}</h3>
                                            <ul>
                                                {item.content.map(
                                                    (list_content) => {
                                                        return (
                                                            <li>
                                                                {list_content.item}
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default MuaVe;
