import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

import classes from "./Cart.module.css";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className={classes.cart}>
      <div className={classes["cart-summary"]}>
        Total amount: ${totalAmount}
      </div>
      <Grid container columns={{ xs: 2, sm: 6, md: 12 }} spacing={10}>
        {cartItems.map((item) => (
          <Grid item xs={2} sm={3} md={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cart;
