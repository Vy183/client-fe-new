import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import review1 from "../../assest/img/rv1.jpg";
import review2 from "../../assest/img/rv2.jpg";
import review3 from "../../assest/img/rv3.jpg";
import review4 from "../../assest/img/rv4.jpg";
import review5 from "../../assest/img/rv5.jpg";
import review6 from "../../assest/img/rv6.jpg";

import "./Review.css";

class Review extends Component {
  state = {
    listReview: [
      {
        img: review1,
        link: "/",
        title:
          '[Preview] Demon Slayer: "Diệt Gọn" Khương Tử Nha Trên Bảng Doanh Thu Phòng Vé Toàn Cầu',
        content:
          "Tình huống hài hước, thông điệp nhân văn, đề cao nữ quyền…, nội dung của Gia Đình Croods: Kỷ Nguyên Mới có thể tóm tắt bằng những yếu tố vừa được liệt kê.",
      },
      {
        img: review2,
        link: "/",
        title:
          "[Review] Gia Đình Croods: Kỷ Nguyên Mới – Vui Nhộn Nhưng Sâu Sắc Và Nữ Quyền Không Hề “Sượng”",
        content:
          "Tình huống hài hước, thông điệp nhân văn, đề cao nữ quyền…, nội dung của Gia Đình Croods: Kỷ Nguyên Mới có thể tóm tắt bằng những yếu tố vừa được liệt kê.",
      },
      {
        img: review3,
        link: "/",
        title:
          "[Review] Trái Tim Quái Vật: Khi Ác Quỷ Là Kẻ Lương Thiện Bị Tổn Thương",
        content:
          "Tình huống hài hước, thông điệp nhân văn, đề cao nữ quyền…, nội dung của Gia Đình Croods: Kỷ Nguyên Mới có thể tóm tắt bằng những yếu tố vừa được liệt kê.",
      },
    ],
    title_review: [
      {
        title_1: "Bình luận phim",
        title_2: "Blog điện ảnh",
      },
    ],
    listBlog: [
      {
        img: review4,
        title:
          "Quái Đản: Kinh Dị Và Hài Hước Khi Sát Nhân Và Người Đẹp Hoán Đổi Thân Xác",
        link: "/",
        content:
          "Tình huống hài hước, thông điệp nhân văn, đề cao nữ quyền…, nội dung của Gia Đình Croods: Kỷ Nguyên Mới có thể tóm tắt bằng những yếu tố vừa được liệt kê.",
      },
      {
        img: review5,
        title: "Kẻ Rình Mồi: Cái Ác Luôn Rình Rập",
        link: "/",
        content:
          "Tình huống hài hước, thông điệp nhân văn, đề cao nữ quyền…, nội dung của Gia Đình Croods: Kỷ Nguyên Mới có thể tóm tắt bằng những yếu tố vừa được liệt kê.",
      },
      {
        img: review6,
        title: "Trốn Chạy: Khi Tình Yêu Thương Mù Quáng Biến Thành Xiềng Xích",
        link: "/",
        content:
          "Tình huống hài hước, thông điệp nhân văn, đề cao nữ quyền…, nội dung của Gia Đình Croods: Kỷ Nguyên Mới có thể tóm tắt bằng những yếu tố vừa được liệt kê.",
      },
    ],
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h3 className="title_review">Bình luận phim</h3>
            {this.state.listReview.map((item) => {
              return (
                <div className="d-flex m-auto contai" key={item.title}>
                  <img src={item.img} alt="" className="img-review" />
                  <div style={{ marginLeft: "20px" }}>
                    <h5 className="title-review">{item.title}</h5>
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col xs={12} md={6}>
            <h3 className="title_review">Blog điện ảnh</h3>
            {this.state.listBlog.map((item) => {
              return (
                <div className="d-flex m-auto contai" key={item.title}>
                  <img src={item.img} alt="" className="img-review" />
                  <div style={{ marginLeft: "20px" }}>
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Review;
