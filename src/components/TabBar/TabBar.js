import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  // TabContent,
  // TabPane,
  // Nav,
  // NavItem,
  // NavLink,
  // Card,
  // Button,
  Row,
  Col,
  Tabs,
  Tab,
  Container,
  Button,
} from "react-bootstrap";

import TabBarItem from "./TabBarItem";
// import DetailFilm from '../DetailFilm/DetailFilm';

import "./TabBarItem.css";

function ControlledTabs() {
  const [key, setKey] = useState("phimdangchieu");
  const [getFilm, setGetFilm] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BE_URL + "/client-page/")
      .then((res) => {
        console.log(res.data);
        setGetFilm(res.data.films);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="mt-4">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(key) => setKey(key)}
        className="tab-homepage"
      >
        <Tab
          className="tabs-chuyen"
          eventKey="phimdangchieu"
          title="Phim đang chiếu"
        >
          <Row>
            {getFilm.map((phim) => {
              return (
                <Col sm="12" md="6" lg="4" key={phim.EN_name}>
                  <TabBarItem phim={phim} />
                </Col>
              );
            })}
          </Row>
        </Tab>
        <Tab
          className="tabs-chuyen"
          eventKey="phimsapchieu"
          title="Phim sắp chiếu"
        >
          <Row>
            {getFilm.map((film) => {
              return (
                <Col sm="12" md="6" lg="4" key={film.EN_name}>
                  <TabBarItem phim={film} />
                </Col>
              );
            })}
          </Row>
        </Tab>
      </Tabs>

      <div style={{ marginLeft: "90%" }}>
        <Button>Xem Them</Button>
      </div>
    </Container>
  );
}

export default ControlledTabs;
