import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductTile from "../components/ProductTile";

let HOME_RENDER = false;

const Home = () => {
  const dispatchFn = useDispatch();
  useEffect(() => {
    if (!HOME_RENDER) {
      HOME_RENDER = true;
      dispatchFn({ type: "PRODUCTS" });
    }
  }, [dispatchFn]);

  return (
    <>
      <ProductTile productType="SMARTPHONES" />
      <ProductTile productType="LAPTOPS" />
    </>
  );
};

export default Home;
