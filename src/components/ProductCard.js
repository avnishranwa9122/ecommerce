import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import { productActions } from "../store/product";

import {
  Button,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Card,
} from "@mui/material";
import { AspectRatio } from "@mui/joy";

import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const dispatchFn = useDispatch();

  const product = props.product;

  const addToCart = () => {
    dispatchFn(cartActions.add(product));
  };

  const onProductClick = () => {
    dispatchFn(productActions.alter({ ...product }));
    navigate(`products/${product.id}`);
  };

  return (
    <Card variant="outlined" className={classes["product-card"]}>
      <div className={classes["card-body"]} onClick={onProductClick}>
        <CardMedia>
          <AspectRatio objectFit="contain">
            <img src={product.thumbnail} alt={product.title} />
          </AspectRatio>
          {/* <img src={product.thumbnail} alt={product.title} height={200} /> */}
        </CardMedia>
        <CardContent className={classes["card-content"]}>
          <Typography variant="h5" className={classes["card-title"]}>
            {product.title}
          </Typography>
          <Typography variant="body2">Category: {product.category}</Typography>
        </CardContent>
      </div>
      <CardActions>
        <Button size="medium" onClick={addToCart}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
