import { createSlice } from "@reduxjs/toolkit";
import { mainActions } from "./main-slice";

const initialState = {
    items: [],
    itemsQuantity: 0,
    totalPrice: 0,
    isOrderMenuOpened: false,
    isOrderSendedSuccessfully: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.itemsQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    title: newItem.title,
                    itemTotalPrice: newItem.price,
                });
                state.totalPrice += newItem.price;
            } else {
                existingItem.quantity++;
                existingItem.itemTotalPrice =
                    existingItem.price * existingItem.quantity;
                state.totalPrice += existingItem.price;
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
            }
            state.itemsQuantity--;
            state.totalPrice -= existingItem.price;
            Math.abs(state.totalPrice);
        },
        openOrderMenu(state) {
            state.isOrderMenuOpened = true;
        },
        closeOrderMenu(state) {
            state.isOrderMenuOpened = false;
        },
        cartFormSendHandler(state) {
            state.itemsQuantity = 0;
            state.items = [];
            state.totalPrice = 0;
            state.isOrderSendedSuccessfully = true;
        },
        resetOrderStatus(state) {
            state.isOrderSendedSuccessfully = false;
            state.isOrderMenuOpened = false;
        }
    },
});

export const sendCartData = (cartData) => {
    return async (dispatchAction) => {
        dispatchAction(
            mainActions.showStatusMessage({
                status: "pending",
                title: "Data Sending...",
                message: "Cart data is sending on server...",
            })
        );
        const sendDataHttpRequest = async () => {
            const response = await fetch(
                "https://react-course-again-b51dd-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "POST",
                    body: JSON.stringify({
                        items: cartData.items,
                        itemsQuantity: cartData.itemsQuantity,
                        totalPrice: cartData.totalPrice.toFixed(2),
                        userInfo: {
                            city: cartData.userInfo.city,
                            address: cartData.userInfo.address,
                            number: cartData.userInfo.number,
                        },
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Error with sending cart data!");
            }
        };

        try {
            await sendDataHttpRequest();
            dispatchAction(
                mainActions.showStatusMessage({
                    status: "success",
                    title: "Data send is success",
                    message: "Data was sended successfully",
                })
            );
        } catch (err) {
            dispatchAction(
                mainActions.showStatusMessage({
                    status: "error",
                    title: "Request Error",
                    message: "Error with cart request!",
                })
            );
        }
    };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
