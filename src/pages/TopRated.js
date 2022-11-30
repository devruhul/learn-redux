import React from "react";
import ProductCard from "../Components/ProductCard";
import { useProductContext } from "../context/ProductContext";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useProductContext();

  let content;

  if (loading) {
    return (content = <div>Loading...</div>);
  }

  if (error) {
    return (content = <div>Something went wrong...</div>);
  }

  if (!loading && !error && products.length > 0) {
    content = products
      .filter((product) => product.rating.rate >= 4)
      .map((product) => <ProductCard key={product.id} {...product} />);
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

export default TopRated;
