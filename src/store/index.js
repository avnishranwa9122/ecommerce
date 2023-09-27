import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import cartSlice from "./cart";
import productSlice from "./product";
import watchFetchingProducts from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchingProducts);

export default store;
