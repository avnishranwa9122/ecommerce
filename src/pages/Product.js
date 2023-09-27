import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart";

import AspectRatio from "@mui/joy/AspectRatio";
import { Button } from "@mui/material";
import classes from "./Product.module.css";

const Product = () => {
  const product = useSelector((state) => state.product.product);

  const dispatchFn = useDispatch();
  const addToCart = () => {
    dispatchFn(cartActions.add(product));
  };

  return (
    <div className={classes.product}>
      <div className={classes.image}>
        <AspectRatio objectFit="contain">
          <img src={product.thumbnail} alt={product.title} />
        </AspectRatio>
      </div>
      <div className={classes.description}>
        <h1>{product.title}</h1>
        <p className={classes["product-desc"]}>{product.description}</p>
        <p className={classes.rating}>
          <span>&#9733;</span>
          {product.rating}
        </p>
        <hr />
        <div className={classes.price}>
          <h3>-{product.discountPercentage}%</h3>
          <h2>${product.price}</h2>
        </div>
        <Button variant="outlined" onClick={addToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
