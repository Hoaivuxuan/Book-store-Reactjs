import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/circles.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const tokenUser = localStorage.getItem("tokenUser");
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Django Store App"
              height="50px"
              className={classes.image}
            />
            <div>Django Shop</div>
          </Typography>

          <div className={classes.grow} />
          {tokenUser ? (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/account"
                // aria-label="Show user items"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/login"
                // aria-label="Show user items"
                color="inherit"
              >
                Login
              </IconButton>
            </div>
          )}

          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
