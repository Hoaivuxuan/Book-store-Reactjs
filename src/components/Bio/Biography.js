import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product.js";
import useStyles from "../Products/styles.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../ProductView/style.css";

const Biography = ({ onAddToCart, clothesProducts }) => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.mainPage}>
        <div className={classes.toolbar} />

        <>
          <div className={classes.categorySection}>
            <h3 className={classes.categoryHeader}>Mobile</h3>
            <h3 className={classes.categoryDesc}>
              Browse our Mobile Collection
            </h3>
            <Grid
              className={classes.categoryFeatured}
              container
              justify="center"
              spacing={1}
            >
              {clothesProducts.map((product) => (
                <Grid
                  className={classes.categoryFeatured}
                  item
                  xs={8}
                  sm={5}
                  md={3}
                  lg={2}
                  id="pro"
                >
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      </main>
    </>
  );
};

export default Biography;
