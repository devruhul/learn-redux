import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  initialState,
  productsReducer,
} from "../state/ProductState/productsReducer";

export const PRODUCT_CONTEXT = createContext();

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  console.log(state);
  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: data }))
      .catch(() => dispatch({ type: "GET_PRODUCTS_FAILURE" }));
  }, []);

  const value = { state, dispatch };
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(PRODUCT_CONTEXT);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductContext");
  }
  return context;
};

export default ProductContext;
