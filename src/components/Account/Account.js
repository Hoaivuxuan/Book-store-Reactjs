import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import axios from "axios";
import useStyles from "./styles";
//
const Account = () => {
  const classes = useStyles();

  const handleSubmit = () => {
    // Xóa localStorage có tên là "tokenUser"
    localStorage.removeItem("tokenUser");
    // Chuyển hướng về trang chủ
    window.location.href = "/";
  };

  return (
    <Container>
      <div className={classes.toolbar} />
      <Navbar expand="lg" className="bg-body-tertiary my-5">
        <Navbar.Brand>Account</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/book-manager">Book</NavDropdown.Item>
              <NavDropdown.Item href="/mobile-manager">Mobile</NavDropdown.Item>
              <NavDropdown.Item href="/clothes-manager">
                Clothes
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login-admin">Admin</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="/"
              style={{ color: "red", marginLeft: "auto" }}
              onClick={handleSubmit}
            >
              Log out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </Container>
  );
};

export default Account;
