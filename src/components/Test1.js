import React, { Component } from "react";
import BuyCard from "./BuyCard/BuyCard";

import { Modal, Fade, Backdrop } from "@material-ui/core";

export default class Test1 extends Component {

  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleOpen}>
          mua card
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          // className={classes.modal}
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade>
            <BuyCard />
          </Fade>
        </Modal>
      </div>
    );
  }
}
