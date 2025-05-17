import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../../store/main-slice";
import { cartActions } from "../../store/cart-slice";
import CartForm from "./CartForm";
import { useEffect } from "react";

const Cart = (props) => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const itemsQuantity = useSelector((state) => state.cart.itemsQuantity);
    const isOrderMenuOpened = useSelector(
        (state) => state.cart.isOrderMenuOpened
    );
    const isOrderSendedSuccessfully = useSelector(
        (state) => state.cart.isOrderSendedSuccessfully
    );
    const isCartVisible = useSelector((state) => state.main.isCartVisible);
    const dispatchAction = useDispatch();
    const cartVisibiltyToggle = () => {
        dispatchAction(mainActions.toggleCartVisibility());
    };
    const orderMenuVisibilityToggle = () => {
        dispatchAction(cartActions.openOrderMenu());
    };
    const cartContent = (
        <div>
            <div className={styles["cart-total-amount"]}>
                <span>Total price</span>
                <span>${Math.abs(totalPrice).toFixed(2)}</span>
            </div>
            {!itemsQuantity && <p>Cart is empty, add items to order!</p>}
            {isOrderMenuOpened && itemsQuantity !== 0 && <CartForm />}
            {!isOrderMenuOpened && (
                <div className={styles["cart-form-buttons"]}>
                    <button
                        className={styles["cart-close-btn"]}
                        onClick={cartVisibiltyToggle}
                    >
                        Close
                    </button>
                    <button
                        disabled={!itemsQuantity}
                        onClick={orderMenuVisibilityToggle}
                        className={styles["cart-order-btn"]}
                    >
                        Order
                    </button>
                </div>
            )}
        </div>
    );
    const cartContentSuccessfull = (
        <div className={styles["cart-request-success"]}>
            <p>Order was sended successfully!!!</p>
            <div className={styles["cart-sent-action"]}>
                <button
                    className={styles["cart-close-btn"]}
                    onClick={cartVisibiltyToggle}
                >
                    Close
                </button>
            </div>
        </div>
    );
    useEffect(() => {
        const originalStyle = window.getComputedStyle(
            document.documentElement
        ).overflow;
        if (isCartVisible) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = originalStyle;
        }
        return () => {
            document.documentElement.style.overflow = originalStyle;
        };
    }, [isCartVisible]);

    return (
        <Modal onVisibilityToggle={props.onVisibilityToggle}>
            <div className={styles.cart}>
                {itemsQuantity !== 0 && (
                    <ul className={styles["cart-list"]}>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                price={item.price}
                                title={item.title}
                                description={item.description}
                                id={item.id}
                                quantity={item.quantity}
                            />
                        ))}
                    </ul>
                )}
                {isOrderSendedSuccessfully && cartContentSuccessfull}
                {!isOrderSendedSuccessfully && cartContent}
            </div>
        </Modal>
    );
};

export default Cart;
