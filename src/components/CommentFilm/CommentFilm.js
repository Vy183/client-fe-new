import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

// import dataComment from "../../assest/dummydata/dataComment";
import avatar1 from "../../assest/img/ava1.jpg";
import "./CommentFilm.css";

class CommentFilm extends Component {
  state = {
    dataComment: [],
    content: "",
    name: "",
  };

  onPushCommentHandler = (e) => {
    if (e.key === "Enter") {
      // console.log(this.props.history);
      e.preventDefault();

      const token = localStorage.getItem("token");

      const { idPhim } = this.props.match.params;

      const content = this.state.content;

      axios
        .post(
          process.env.REACT_APP_BE_URL +
            `/client-page/comments-client/${idPhim}`,
          { content },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          this.getComments();
          this.setState({ content: "" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  componentDidMount = () => {
    this.getComments();
    // this.setState({ dataComment: dataComment });
  };

  getComments = () => {
    const token = localStorage.getItem("token");

    const { idPhim } = this.props.match.params;
    axios
      .get(
        process.env.REACT_APP_BE_URL + `/client-page/get-comments/${idPhim}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res);
        this.setState({ dataComment: res.data.content });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeValueHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // deleteHandler = () => {
    
  // }

  submitFormHandle = (e) => {
    e.preventDefault();
    // console.log(this.state.bluan);
  };

  render() {
    // console.log(this.props.userSend);
    // console.log(this.props);
    return (
      <Container className="p-0">
        <div className="d-flex ">
          <Avatar
            variant="square"
            className="mt-5"
            style={{ width: "75px", height: "75px" }}
          >
            V
          </Avatar>
          <Form onSubmit={this.submitFormHandle}>
            <Form.Group controlId="exampleForm.Comment" className="mx-3 mt-4">
              <Form.Label>Bình luận</Form.Label>
              <Form.Control
                name="content"
                as="textarea"
                rows={2}
                style={{ resize: "none", width: "120vh" }}
                onChange={this.changeValueHandle}
                value={this.state.content}
                onKeyDown={this.onPushCommentHandler}
              />
            </Form.Group>
            {/* 
            <Button variant="primary" type="submit">
              Comment
            </Button> */}
          </Form>
        </div>
        {this.state.dataComment.map((comment) => {
          return (
            <div className="d-flex">
              <div className="mt-4">
                <img
                  src={avatar1}
                  alt=""
                  style={{ width: "75px", height: "75px" }}
                />
              </div>
              <div md={8} className="mx-3 my-4">
                <h5>{comment.userId.name}</h5>
                <p>{comment.content}</p>
                <div>
                  <Button variant="link">Sửa</Button>
                  <Button variant="link">Xoá</Button>
                </div>
                <div style={{ fontSize: "11px" }}>
                  {moment(comment.commentDate).startOf("hour").fromNow()}
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    );
  }
}
export default withRouter(CommentFilm);
