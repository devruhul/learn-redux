import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  error: false,
  products: [],
  carts: [],
  wishlist: [],
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case actionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case actionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case actionTypes.REMOVE_FROM_CART_SINGLE_ITEM:
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload),
      };

    default:
      return state;
  }
};
