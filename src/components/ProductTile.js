import { useState } from "react";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import Pagination from "@mui/material/Pagination";
import classes from "./ProductTile.module.css";

const PRODUCTS_LIMIT = 4;

const ProductTile = (props) => {
  const [page, setPage] = useState(1);

  const onPageChange = (e, p) => {
    setPage(p);
  };

  const productType = props.productType.toLowerCase();
  const products = useSelector((state) =>
    state.product.items.filter((item) => item.category === productType)
  );

  const PAGINATION_COUNT = Math.ceil(products.length / PRODUCTS_LIMIT);

  return (
    <>
      <div className={classes.products}>
        <div className={classes.product}>
          <h1>{props.productType}</h1>
          <Grid
            container
            columns={{ xs: 2, sm: 6, md: 12 }}
            rowSpacing={4}
            columnSpacing={{ xs: 2, sm: 4 }}
          >
            {products
              .slice(
                (page - 1) * PRODUCTS_LIMIT,
                (page - 1) * PRODUCTS_LIMIT + PRODUCTS_LIMIT
              )
              .map((product) => {
                return (
                  <Grid
                    key={product.id}
                    item
                    xs={1}
                    sm={2}
                    md={3}
                    className={classes["grid-item"]}
                  >
                    <ProductCard product={product} />
                  </Grid>
                );
              })}
          </Grid>
          <Pagination
            count={PAGINATION_COUNT}
            color="primary"
            sx={{ marginTop: "1rem" }}
            page={page}
            onChange={(e, p) => onPageChange(e, p)}
          />
        </div>
      </div>
    </>
  );
};

export default ProductTile;
