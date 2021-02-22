import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import {
  TextField,
  FormControl,
  MenuItem,
  Grid,
  Button,
} from "@material-ui/core/";
// import ItemPurchaseFilm from "../ItemPurchaseFilm/ItemPurchaseFilm";
import ItemPurchaserFilm from "./ItemPurchaserFilm";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  state = {
    name: "",
    phone_number: "",
    day_of_birth: "",
    gender: "",
    balance: "",
    purchasedFilms: [],
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get(process.env.REACT_APP_BE_URL + "/my-profile", {
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

  render() {
    return (
      <Container>
        <h1 style={{ margin: "0 0 20px 36%" }}>Profile Page</h1>
        <Row>
          <Col md={4}>
            <FormControl
              // style={{ margin: "10px 0px 20px  250px", width: "50%" }}
            >
              <TextField
                className="mb-4 w-100"
                id="name"
                name="name"
                label="họ và tên của user"
                variant="outlined"
                value={this.state.name}
                
                // onChange={this.changeInputHandler}
              />
              <TextField className='w-100'
                id="gender"
                name="gender"
                label="giới tính"
                variant="outlined"
                value={this.state.gender}
                // onChange={this.changeInputHandler}
              />

              <Link to={`/edit-trang-ca-nhan`} className='mt-2'>
                <Button variant="contained" size="small" color="secondary">
                  Edit
                </Button>
              </Link>
            </FormControl>
          </Col>
          <Col md={8} className="">
            <Grid
              container
              spacing={1}
              style={{
                justifyContent: "space-evenly",
                width: " 100%",
              }}
            >
              {this.state.purchasedFilms.map((film) => {
                return (
                  <Grid
                    key={film.EN_name}
                    container
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    spacing={3}
                  >
                    <ItemPurchaserFilm
                      EN_name={film.EN_name}
                      VN_name={film.VN_name}
                      urlImg={film.urlImg}
                      id_phim={film._id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Col>
        </Row>
      </Container>
    );
  }
}
