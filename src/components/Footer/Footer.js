import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import FacebookIcon from '@material-ui/icons/Facebook';


import './Footer.css';

class Footer extends Component {
    state = {
        listInfo: [
            {
                title: "GIỚI THIỆU",
                lask: '|',
                thong_tin: [
                    {
                        title: "VỀ CHÚNG TÔI",
                        link: "/",
                    },
                    {
                        title: "THỎA THUẬN SỬ DỤNG",
                        link: "/",
                    },
                    {
                        title: "QUY CHẾ HOẠT ĐỘNG",
                        link: "/",
                    },
                    {
                        title: "CHÍNH SÁCH BẢO MẬT",
                        link: "/",
                    },
                    // làm đi
                ],
            },
            {
                title: "GÓC ĐIỆN ẢNH",
                lask: '|',
                thong_tin: [
                    {
                        title: "THỂ LOẠI PHIM",
                        link: "/",
                    },
                    {
                        title: "BÌNH LUẬN PHIM",
                        link: "/",
                    },
                    {
                        title: "BLOG ĐIỆN ẢNH",
                        link: "/",
                    },
                    {
                        title: "PHIM HAY THÁNG",
                        link: "/",
                    },
                    // làm đi
                ],
            },
            {
                title: "HỖ TRỢ",
                lask: '|',
                thong_tin: [
                    {
                        title: "GÓP Ý",
                        link: "/",
                    },
                    {
                        title: "SALE & SERVICES",
                        link: "/",
                    },
                    {
                        title: "RẠP/GIÁ VÉ",
                        link: "/",
                    },
                    {
                        title: "TUYỂN DỤNG",
                        link: "/",
                    },
                    // làm đi
                ],
            },
            {
                title: "KẾT NỐI GALAXY CINEMA",
                lask: '|',
                thong_tin: [
                    {
                        title: "DOWNLOAD",
                        link: "/",
                    },
                    
                ],
            },
        ],
    };

    // 2 cái map lồng nhau, đọc hiểu rồi css đi ok
    render() {
        return (
            <div style={{background: '#000'}}>
                <Container >
                    <Row className="py-3">
                        {this.state.listInfo.map((list) => {
                            return (
                                <Col key={list.title} sm="12" md="6" lg="3">
                                    <h5 className="footer-title pl-3">
                                        {list.title}</h5>
                                    
                                    <ul className='list_footer'>
                                        {list.thong_tin.map((item_thong_tin) => {
                                            return (
                                                <a
                                                    key={item_thong_tin.title}
                                                    href={item_thong_tin.link}
                                                >
                                                    <li className='list_item'>{item_thong_tin.title}</li>
                                                </a>
                                            );
                                        })}
                                    </ul>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;
