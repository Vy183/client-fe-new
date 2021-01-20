import React, { Component } from "react";
import { Container, Table, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import ItemCart from "./ItemCart";
import "./FormCart.css";
import cart from "../../assest/img/cart.jpg";
import { Link } from "react-router-dom";

export default class FormCart extends Component {
  state = {
    cart: [],
    buyYet: false,
  };

  postPurchasedFilm = () => {
    // this.props.cart = [{_id:, name:}]
    //  -> [_id,...]
    const filmsList = this.props.cart.map((item) => item._id);

    // console.log(filmsList);

    const token = localStorage.getItem("token");

    if (token) {
      axios
        .post(
          "http://localhost:4000/client-page/purchase",
          { filmsList },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          // console.log(res);

          this.props.successBuyCart();
          this.props.updateBalance(res.data.newBalance);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    console.log(this.props);
    let totalPrice = 0;

    this.props.cart.forEach((item) => {
      totalPrice += item.price;
    });
    let soDu = this.props.balance - totalPrice;
    return (
      <Container className="my-2">
        <Row>
          <Col md={7}>
            {this.props.cart.map((item_phim) => {
              return (
                <ItemCart
                  item_info={item_phim}
                  remove_Item={this.props.removeCart}
                  // save_Item={this.props.saveCart}
                />
              );
            })}
          </Col>

          <Col
            md={5}
            style={{ background: "rgb(214 202 202 / 16%)", opacity: "0.95" }}
          >
            {this.props.cart.length != 0 ? (
              <div className="my-3" style={{ marginLeft: "" }}>
                <div>Tổng tiền:</div>
                <h4>{totalPrice.toLocaleString()} VNĐ</h4>

                <div>Số dư tài khoản:</div>
                <h4>{this.props.balance.toLocaleString()} VNĐ</h4>

                <div>Số dư còn lại:</div>
                <h4>{soDu.toLocaleString()} VNĐ</h4>
                <Button
                  block
                  className="w-100"
                  variant="success"
                  className="mr-2"
                  onClick={this.postPurchasedFilm}
                  disabled={!this.props.user}
                >
                  Thanh Toán
                </Button>
              </div>
            ) : (
              <div className="" style={{ textAlign: "center" }}>
                <img
                  src={cart}
                  alt=""
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                  }}
                />
                {/* <ArrowBackIcon className="mr-4 mt-2" /> */}
                <h3>Please Choose Your Film</h3>
                <Link to="/">
                  <Button variant="info">
                    {" "}
                    <ArrowBackIcon className="mr-2" />
                    Go back Home
                  </Button>
                </Link>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
