import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { TextField, FormControl, Grid, Button } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  state = {
    name: "",
    phone_number: "",
    date_of_birth: "",
    gender: "",
    balance: "",
    email: "",
    _id: "",
    isDone: false,
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/my-profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({ ...res.data.user });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };
  
  EditProfileHandler = (event) => {

    const userdata = {
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      date_of_birth: this.state.date_of_birth,
      gender: this.state.gender,
      balance: this.state.balance,
      _id: this.state._id,
      
    };

    console.log(userdata);

    const id_user = userdata._id;

    console.log(id_user);

    axios
      .put("http://localhost:4000/edit-my-profile/" + id_user, userdata)

      .then((res) => {
        console.log(res.data);
        this.setState({ isDone: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
   
    return (
      <Container>
        <h1 style={{ margin: "0 0 20px 36%" }}>Profile Page</h1>
        <FormControl style={{ margin: "0 0 20px 23%", width: "50%" }}>
          <TextField
            id="name"
            name="name"
            label="họ và tên của user"
            variant="outlined"
            value={this.state.name}
            onChange={this.changeInputHandler}
          />
          <TextField
            id="email"
            name="email"
            label="email"
            variant="outlined"
            value={this.state.email}
            onChange={this.changeInputHandler}
          />
          <TextField
            id="phone_number"
            name="phone_number"
            label="số điện thoại"
            variant="outlined"
            value={this.state.phone_number}
            onChange={this.changeInputHandler}
          />
          <TextField
            id="date_of_birth"
            name="date_of_birth"
            type="date"
            variant="outlined"
            value={this.state.date_of_birth}
            onChange={this.changeInputHandler}
          />
          <TextField
            id="gender"
            name="gender"
            label="giới tính"
            variant="outlined"
            value={this.state.gender}
            onChange={this.changeInputHandler}
          />
          <TextField
            id="balance"
            name="balance"
            label="số dư tài khoản"
            variant="outlined"
            value={this.state.balance}
          />
          <Grid item xs={12} md={6} lg={5} spacing={3}>
            <Button
              variant="contained"
              style={{ background: "yellowgreen" }}
              startIcon={<EditIcon />}
              onClick={this.EditProfileHandler}
            >
              Cập nhật thông tin
            </Button>

            <Link to={`/trang-ca-nhan`}>
              <Button
                variant="contained"
                style={{ background: "coral" }}
                startIcon={<EditIcon />}
              >
                Trở về
              </Button>
            </Link>
          </Grid>
        </FormControl>
      </Container>
    );
  }
}
