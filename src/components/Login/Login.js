import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Alert } from "@material-ui/lab";

import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    pass: "",
    email_validate: true,
    pass_validate: true,
    error: null,
  };

  changeValueHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitFormLoginHandler = (e) => {
    e.preventDefault();
    // event.preventDefault();;
    // console.log(this.state);
    // console.log(this.state);

    const dataUser = {
      email: this.state.email,
      password: this.state.pass,
    };

    // console.log(dataUser);

    this.setState({ error: null });

    axios
      .post("http://localhost:4000/login", dataUser)
      .then((res) => {
        // console.log(res.data);
        const { name, email, token } = res.data;
        // console.log(token);
        localStorage.setItem("token", token);
        this.props.loginSuccess(name);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err.response.data.message });
      });
  };

  validateEmailHandler = () => {
    const email = this.state.email;

    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      this.setState({ email_validate: true });
    } else {
      this.setState({ email_validate: false });
    }
  };

  validatePassHandler = () => {
    const password = this.state.pass;

    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
      this.setState({ pass_validate: true });
    } else {
      this.setState({ pass_validate: false });
    }
  };

  render() {
    return (
      <Container>
        <p style={{ color: "#a0a3a7", margin: "25px 0px", fontSize: "14px" }}>
          Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận thêm
          nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.
        </p>
        {this.state.error ? (
          <Alert severity="error">{this.state.error}</Alert>
        ) : null}

        <Form onSubmit={this.submitFormLoginHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.changeValueHandler}
              isInvalid={!this.state.email_validate}
              onBlur={this.validateEmailHandler}
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="hold">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              className="hold"
              type="password"
              placeholder="Mật khẩu"
              name="pass"
              value={this.state.pass}
              onChange={this.changeValueHandler}
              //   isInvalid={!this.state.pass_validate}
              //   onBlur={this.validatePassHandler}
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập mật khẩu (từ 6 đến 20 kí tự)
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicQMK">
            <Form.Label style={{ color: "#a0a3a7" }}>Quên mật khẩu?</Form.Label>
          </Form.Group>
          <Button
            className="p-2"
            style={{
              background: "#e26435",
              width: "100%",
              border: "none",
              marginBottom: "25px",
              fontWeight: "600",
              borderRadius: "unset",
            }}
            type="submit"
          >
            ĐĂNG NHẬP
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
