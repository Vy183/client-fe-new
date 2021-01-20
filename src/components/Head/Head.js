import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Badge, IconButton, withStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";


import "./Head.css";
import imglogo from "../../assest/img/logo.png";
import MenuLogin from "../MenuLogin/MenuLogin";
import ButtonLogin from "../Login/ButtonLogin";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default class Head extends Component {
  state = {
    key: "login",
    search: "",
  };

  changeValueHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    console.log(this.state);
  };

  submitSearchHandler = (e) => {
    e.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <div className="d-flex head-container" style={{ background: "#f7f9fa" }}>
        <Link to="/">
          <img
            src={imglogo}
            alt=""
            className="ml-3"
            style={{ marginTop: "18px" }}
          />
        </Link>

        <Form className="m-auto d-flex" onSubmit={this.submitSearchHandler}>
          <Form.Group controlId="formBasicSearch">
            <Form.Control
              type="text"
              name="search"
              placeholder="Tìm tên phim, diễn viên..."
              style={{ width: "350px", marginTop: "15px" }}
              value={this.state.search}
              onChange={this.changeValueHandler}
            />
          </Form.Group>
          <Link to={`/search?name=${this.state.search}`}>
            <Button variant="primary" type="submit" className="btn-search">
              Tìm
            </Button>
          </Link>
        </Form>

        <div className="m-auto">
          <div className="d-flex">
            {this.props.user ? (
              <MenuLogin
                updateBalance={this.props.updateBalance}
                user={this.props.user}
                logout={this.props.logout}
              />
            ) : (
              <ButtonLogin loginSuccess={this.props.loginSuccess} />
            )}
          </div>
        </div>

        <Link to="/gio-hang">
          <div
            className="mr-5 my-3"
            style={{
              // background: "#f26c39",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={this.props.cart.length}
                style={{ color: "#f26c39" }}
              >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </Link>
      </div>
    );
  }
}
