import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./TabBarItem.css";

class TabBarItem extends Component {
  render() {
    // console.log(this.props.phim);
    var id_phim = this.props.phim.id || this.props.phim._id;
    return (
      <Card className="my-2 border-0">
        <div className="tabbar-img">
          <Card.Img
            variant="top"
            src={this.props.phim.urlImg}
            style={{ width: "350px", height: "438px" }}
          />
          <div className="tabbar-img-overlay ">
            <Link to={"/chi-tiet/" + id_phim.toString()}>
              <Button variant="light" className="tabbar-img-button">
                Mua phim
              </Button>
            </Link>
          </div>
        </div>
        <Card.Body className="content">
          <Card.Title>{this.props.phim.VN_name}</Card.Title>
          <Card.Text>{this.props.phim.EN_name}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default TabBarItem;
