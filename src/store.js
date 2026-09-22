import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

// Persist the cart to localStorage on every change, so a refresh doesn't wipe it.
store.subscribe(() => {
  localStorage.setItem(
    "fastReactBurger_cart",
    JSON.stringify(store.getState().cart.cart),
  );
});

export default store;
