import React, { useState } from "react";
import axios from "axios";

import {
  Container,
  // TextField,
  Button,
  // Modal,
  // Fade,
  // Backdrop,
  CircularProgress,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Row, Col, Form } from "react-bootstrap";

const token = localStorage.getItem("token");
const config = { headers: { Authorization: `Bearer ${token}` } };

const BuyCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const [state, setState] = useState({
    serial: "",
    card: "",
    serial_validate: false,
    card_validate: false,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loadingFetchCash, setLoadingFetchCash] = useState(false);
  const [res, setRes] = useState(null);

  const changeValueHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const validateserialHandler = () => {
    const serial_temp = state.serial;
    if (/[A-Za-z][0-9]{6}/.test(serial_temp)) {
      setState({ ...state, serial_validate: false });
    } else {
      setState({ serial_validate: true });
    }
  };

  const validateCardHandler = () => {
    const card_temp = state.card;

    if (/[0-9]{13}/.test(card_temp)) {
      setState({ card_validate: false });
    } else {
      setState({ card_validate: true });
    }
  };

  const submitFormBuyHandler = (e) => {
    e.preventDefault();

    setError(null);
    setSuccess(null);

    const sendData = {
      serial: state.serial,
      code: state.card,
    };

    axios
      .post(process.env.REACT_APP_BE_URL + "/cash", sendData, config)
      .then((res) => {
        console.log(res.data);
        setSuccess(res.data.message);
        props.updateBalance(res.data.newBalance);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
        setError(err.response.data.message);
      });

    // setState({ ...state, error: null, success: null });
  };

  const getCash = () => {
    setLoadingFetchCash(true);
    setRes(null);
    axios
      .get(process.env.REACT_APP_BE_URL + "/cash", config)
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingFetchCash(false);
      });
  };
  return (
    <Container
      style={{ background: "white", width: "40%", borderRadius: "4px" }}
    >
      <Row className="mt-5">
        <Col>
          <div className="mx-2 my-4">
            <Form onSubmit={submitFormBuyHandler}>
              {error ? <Alert severity="error">{error}</Alert> : <></>}

              {success ? <Alert severity="success">{success}</Alert> : <></>}

              <Form.Group controlId="formBasicserial">
                <Form.Label>Mã serial</Form.Label>

                <Form.Control
                  placeholder="Mã serial"
                  className="w-100"
                  id="outlined-serial"
                  // label="Số serial"
                  variant="outlined"
                  name="serial"
                  value={state.serial}
                  onChange={changeValueHandler}
                  // isInvalid={state.serial_validate}
                  // onBlur={validateserialHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập mã serial gồm 1 kí tự và 6 số bất kì
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicCard">
                <Form.Label>Mã Thẻ</Form.Label>

                <Form.Control
                  className="w-100"
                  id="outlined-mathe"
                  variant="outlined"
                  placeholder="Mã Thẻ"
                  name="card"
                  value={state.card}
                  onChange={changeValueHandler}
                  // isInvalid={state.card_validate}
                  // onBlur={validateCardHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập mã card gồm 13 số bất kì
                </Form.Control.Feedback>
              </Form.Group>

              {/* <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                variant="outlined"
                // error={validateserialHandler}
                // helperText={}
              /> */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="mr-3"
                  type="submit"
                >
                  Nạp Thẻ
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <Button variant="contained" onClick={getCash} className="my-2">
        Lấy mã thẻ test
      </Button>
      {loadingFetchCash ? <CircularProgress /> : null}
      {res ? (
        <div className="my-2 mx-2">
          <h3>Serial: {res.serial}</h3>
          <h3>Code: {res.code}</h3>
          <h4 className="mb-2">Mệnh giá: {res.money}</h4>
        </div>
      ) : null}
    </Container>
  );
};

export default BuyCard;
