import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";

import "./Search.css";

export default class Search extends Component {
  state = {
    searchFilms: [],
    name: "",
  };

  componentDidMount = () => {
    this.searchHandler();
  };

  componentDidUpdate = () => {
    const queryString = this.props.location.search.slice(1);

    const query = queryString.split("&").reduce((total, current) => {
      const [key, value] = current.split("=");
      total[key] = value;
      return total;
    }, {});

    if (query.name !== this.state.name) {
      this.props.history.go(0);
    }
  };

  searchHandler = () => {
    const queryString = this.props.location.search.slice(1);

    const query = queryString.split("&").reduce((total, current) => {
      const [key, value] = current.split("=");
      total[key] = value;
      return total;
    }, {});

    const name = query.name;
    this.setState({ name });

    // lấy được query từ url fe rồi đó, truyền vào url trong axios
    // tự làm

    axios
      .get(process.env.REACT_APP_BE_URL + `/search?name=${name}`) //viết cứng thế này thì nó tìm mỗi 1 phim là đúng rồi
      .then((res) => {
        console.log(res.data);
        this.setState({ searchFilms: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <h1>Kết quả tìm kiếm với tên: {this.state.name}</h1>
        {this.state.searchFilms.map((film) => {
          return (
            <Row>
              <Col md={4}>
                <img
                  src={film.urlImg}
                  alt=""
                  className="ml-5"
                  style={{ width: "75%", height: "270px", marginBottom: "5px" }}
                />
              </Col>
              <Col md={8}>
                <h4>{film.EN_name}</h4>
                <h4>{film.VN_name}</h4>
                <li>
                  Thời lượng: <SlowMotionVideoIcon />
                  {film.duration}
                </li>
                <li>Quốc gia: {film.country}</li>
                <li>Ngày: {film.date}</li>
                <li>Nội dung: {film.content}</li>
                <li>Giá: {film.price.toLocaleString()} VNĐ</li>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}
