import React from "react";
import { Tabs, Tab } from "react-bootstrap";


import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const FormLR = () => {
  return (
    <div>
      <Tabs defaultActiveKey="login" transition={false} id="noanim-tab-example">
        <Tab eventKey="login" title="Login">
          <Login />
        </Tab>
        <Tab eventKey="register" title="Register">
          <Register />
        </Tab>
        
      </Tabs>
    </div>
  );
};

export default FormLR;
