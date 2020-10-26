import { ProductCard, Wrapper } from "../components";
import React, { useEffect, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { drawerWidth } from "../styleVariables";
import { makeStyles } from "@material-ui/core/styles";
import { mockProduct } from "../utils/mock";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 100
  },
  toolBar: {
    paddingLeft: theme.spacing(1) / 2,
    paddingRight: theme.spacing(1) / 2
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    maxWidth: drawerWidth,
    [theme.breakpoints.up("md")]: {
      backgroundColor: "transparent",
      overflow: "visible"
    },
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 56px)"
    },
    [theme.breakpoints.up("sm")]: {
      top: "0",
      height: "calc(100vh - 64px)"
    },
    border: 0,
    height: "auto"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    minWidth: 0
  },
  modal: {
    [theme.breakpoints.down("sm")]: {
      top: "56px"
    },
    [theme.breakpoints.up("sm")]: {
      top: "64px"
    },
    zIndex: "1000"
  },
  backdrop: {
    [theme.breakpoints.down("sm")]: {
      top: "56px"
    },
    [theme.breakpoints.up("sm")]: {
      top: "64px"
    }
  },
  checkbox: {
    width: "24px",
    height: "24px"
  }
}));

const Products = () => {
  const classes = useStyles();
  const [opened, setOpened] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mockProducts = [];

    const addProducts = (i) => {
      mockProducts.push({
        id: i,
        ...mockProduct()
      });
    };

    for (let num = 1; num <= 21; num += 1) {
      addProducts(num);
    }

    setProducts(mockProducts);
  }, []);

  const handleDrawerToggle = () => setOpened(!opened);

  return (
    <Wrapper padding={false}>
      <Hidden mdUp>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => handleDrawerToggle()}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Products
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Grid className={classes.root}>
        <main className={classes.content}>
          <Typography style={{ margin: "20px 0" }} variant="h4">
            Products
          </Typography>
          <Grid container spacing={1}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  sale={product.sale}
                  discounted={product.discounted}
                  discount={product.discount}
                />
              </Grid>
            ))}
          </Grid>
        </main>
      </Grid>
    </Wrapper>
  );
};

export default Products;
