import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        scrollToFooterHandler() {
            window.scrollTo({ top: 2500, behavior: "smooth" });
            console.log("footer")
        },
        scrollToHeaderHandler() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        scrollToProductsHandler() {
            window.scrollTo({ top: 866, behavior: "smooth" });
        },
    },
});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;
