import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useProductContext } from "../context/ProductContext";
import { actionTypes } from "../state/ProductState/actionTypes";

const ProductCard = ({
  title,
  category,
  price,
  rating,
  description,
  image,
  id,
}) => {
  const { dispatch } = useProductContext();
  return (
    <div className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'>
      <h1 className='font-bold text-center'>{title}</h1>
      <h1 className='font-bold text-center'>Category: {category}</h1>
      <h1 className='font-bold text-center'>Price: {price}</h1>
      <div className='max-h-96 w-2/4 mx-auto mb-8'>
        <img src={image} alt='product thumbnail' />
      </div>
      <h1>{description}</h1>
      <div className='flex gap-2 mt-5'>
        <button
          className='
        bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={() =>
            dispatch({
              type: actionTypes.ADD_TO_CART,
              payload: { title, category, price, rating, description, image },
            })
          }
        >
          Add to cart
        </button>
        <button
          className='
        bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={() =>
            dispatch({
              type: actionTypes.REMOVE_FROM_CART_SINGLE_ITEM,
              payload: id,
            })
          }
        >
          -
        </button>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
          onClick={() =>
            dispatch({
              type: actionTypes.ADD_TO_WISHLIST,
              payload: { title, category, price, rating, description, image },
            })
          }
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
