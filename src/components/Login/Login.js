import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Divider,
} from "@material-ui/core";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import useStyles from "./styles";
//
const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const responseUser = await axios.post(
        "http://127.0.0.1:8000/api/user/login/",
        {
          username: username,
          password: password,
        }
      );

      if (responseUser.data.user) {
        // Lưu tokenUser vào localStorage
        localStorage.setItem("tokenUser", responseUser.data.access);
        // Chuyển hướng đến trang chính
        window.location.href = "/";
      }

      // const responseAdmin = await axios.post(
      //   "http://127.0.0.1:8001/api/manager/login/",
      //   {
      //     username: username,
      //     password: password,
      //   }
      // );

      // if (responseAdmin.data.manager) {
      //   // Lưu tokenUser vào localStorage
      //   localStorage.setItem("tokenAdmin", responseAdmin.data.access);
      //   // Chuyển hướng đến trang chính
      //   window.location.href = "/";
      // }
    } catch (error) {
      // Xử lý lỗi ở đây
      console.error("Error occurred:", error);
    }
  };

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        <b>Login</b>
      </Typography>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="user"
            placeholder="Enter user"
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <hr />
    </Container>
  );
};

export default Login;
