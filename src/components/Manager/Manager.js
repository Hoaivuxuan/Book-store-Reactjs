import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import axios from "axios";
import useStyles from "./styles";
//
const Manager = () => {
  const classes = useStyles();

  const handleSubmit = () => {
    // Xóa localStorage có tên là "tokenUser"
    localStorage.removeItem("tokenAdmin");
    // Chuyển hướng về trang chủ
    window.location.href = "/";
  };

  return (
    <Container>
      <div className={classes.toolbar} />
      <Navbar expand="lg" className="bg-body-tertiary my-5">
        <Navbar.Brand>Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menu manager" id="basic-nav-dropdown">
              <NavDropdown.Item href="/book-manager">
                Book Manager
              </NavDropdown.Item>
              <NavDropdown.Item href="/mobile-manager">
                Mobile Manager
              </NavDropdown.Item>
              <NavDropdown.Item href="/clothes-manager">
                Clothes Manager
              </NavDropdown.Item>
            </NavDropdown>
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

export default Manager;
