import { call, put, takeLatest } from "redux-saga/effects";

import { productActions } from "../store/product";

const apiCallForSmartphones = async () => {
  const response = await fetch(`https://dummyjson.com/products`);
  const data = await response.json();
  return data;
};

function* fetchProducts() {
  try {
    const products = yield call(apiCallForSmartphones);
    yield put(productActions.updateItems(products));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFetchingProducts() {
  yield takeLatest("PRODUCTS", fetchProducts);
  // yield takeEvery(["SMARTPHONES", "LAPTOPS"], fetchSmartphones);
}

export default watchFetchingProducts;
