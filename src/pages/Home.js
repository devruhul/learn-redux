import React from "react";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const {
    state: { products, loading, error },
  } = useProductContext();

  let content;

  if (loading) {
    content = <div>Loading...</div>;
  }

  if (error) {
    content = <div>Something went wrong...</div>;
  }

  if (!loading && !error && products.length) {
    content = products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ));
  }

  if (!loading && !error && products.length === 0) {
    content = <div>No products found</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Home;
