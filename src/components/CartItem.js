import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import { productActions } from "../store/product";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/joy";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const navigate = useNavigate();
  const dispatchFn = useDispatch();

  const incrementQuantity = () => {
    dispatchFn(cartActions.increaseQuantity(props.item.id));
  };

  const decreaseQuantity = () => {
    dispatchFn(cartActions.decreaseQuantity(props.item.id));
  };

  const removeFromCart = () => {
    dispatchFn(cartActions.remove(props.item.id));
  };

  const onItemClick = () => {
    dispatchFn(productActions.alter(props.item));
    navigate(`/products/${props.item.id}`);
  };

  return (
    <Card className={classes.cartItem}>
      <CardMedia className={classes["card-media"]} onClick={onItemClick}>
        <img src={props.item.thumbnail} height={200} alt={props.item.title} />
      </CardMedia>
      <Box className={classes["card-box"]}>
        <CardContent className={classes["card-content"]} onClick={onItemClick}>
          <div className={classes["product-desc"]}>
            <Typography component="div" variant="h4">
              {props.item.title}
            </Typography>
            <Typography component="div" variant="h6">
              Category: {props.item.category}
            </Typography>
          </div>
          <Typography component="div" variant="h5" sx={{ marginTop: "3rem" }}>
            Price: ${props.item.price}
          </Typography>
          <Typography component="div" variant="h6">
            Quantity: {props.item.quantity}
          </Typography>
        </CardContent>
        <CardActions className={classes["action-buttons"]}>
          <div className={classes["cart-actions"]}>
            <Button variant="outlined" onClick={incrementQuantity}>
              +
            </Button>
            <Button variant="outlined" onClick={decreaseQuantity}>
              -
            </Button>
          </div>
          <Button
            variant="contained"
            className={classes["remove-button"]}
            onClick={removeFromCart}
          >
            Remove from cart
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CartItem;
