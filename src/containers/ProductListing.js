import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProduct, fetchProducts } from "../redux/actions/productActions";

 const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

 /* const fetchProducts = async () => {
    const respone = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
      dispatch((setProduct(respone.data)));
  }; */

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
