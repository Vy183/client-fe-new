import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Modal, Tabs, Tab } from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";

import Login from "../Login/Login";
import Register from "../Register/Register";

export default class ButtonLogin extends Component {
  state = {
    show: false,
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  handleOpen = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <Button
          startIcon={<PersonIcon />}
          onClick={this.handleOpen}
          variant="contained"
          color="default"
        >
          Đăng nhập
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <Tabs
              id="controlled-tab-example"
              activeKey={this.key}
              onSelect={(k) => this.setState({ key: k })}
            >
              <Tab eventKey="login" title="Đăng nhập">
                <Login loginSuccess={this.props.loginSuccess} />
              </Tab>
              <Tab eventKey="register" title="Đăng ký">
                <Register />
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
