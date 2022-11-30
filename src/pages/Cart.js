import React from "react";
import ProductCard from "../Components/ProductCard";
import { useProductContext } from "../context/ProductContext";

const Cart = () => {
  const {
    state: { carts, loading, error },
  } = useProductContext();

  let content;

  if (loading) {
    content = <div>Loading...</div>;
  }

  if (error) {
    content = <div>Something went wrong...</div>;
  }

  if (!loading && !error && carts.length) {
    content = carts.map((cart, index) => <ProductCard key={index} {...cart} />);
  }

  if (!loading && !error && carts.length === 0) {
    content = <div>No carts found</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Cart;
