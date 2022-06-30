import { configureStore } from "@reduxjs/toolkit";
const testReducer = (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      return state;
  }
};
export const store = configureStore({
  reducer: {
    counter: testReducer,
  },
});
