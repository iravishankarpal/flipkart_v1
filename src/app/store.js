import { configureStore } from "@reduxjs/toolkit";
export const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cart, { ...action.payload, qty: 1 }];

    case "REMOVE_FROM_CART":
      return cart.filter((c) => c.id !== action.payload.id);
    case "CHANGE_CART_QTY":
      return [
        ...cart,
        cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      ];
    default:
      return cart;
  }
};

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return { byStock: false, byFastDelivery: false, byRating: 0 };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
  },
});
