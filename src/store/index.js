import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main-slice";
import cartReducer from "./cart-slice";
import headerReducer from "./header-slice";
const store = configureStore({
    reducer: {
        main: mainReducer,
        cart: cartReducer,
        header: headerReducer,
    },
});

export default store;
