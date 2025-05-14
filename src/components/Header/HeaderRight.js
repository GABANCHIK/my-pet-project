import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../UI/CartIcon";
import styles from "./HeaderRight.module.css";
import { mainActions } from "../../store/main-slice";
import { cartActions } from "../../store/cart-slice";

const HeaderRight = () => {
    const itemsQuantity = useSelector((state) => state.cart.itemsQuantity);
    const dispatchAction = useDispatch();
    const isRightSideBarOpen = useSelector(
        (state) => state.main.isRightSideBarOpen
    );
    
    const cartVisibiltyToggle = () => {
        dispatchAction(mainActions.toggleCartVisibility());
        dispatchAction(cartActions.resetOrderStatus());
    };
    const toggleRightSideBarHandler = () => {
        dispatchAction(mainActions.toggleRightSideBarVisibility());
    };

    return (
        <div className={styles.right}>
            <button
                onClick={cartVisibiltyToggle}
                className={styles["cart-nav-btn"]}
            >
                <CartIcon />
                <span>CART</span>
                <span className={styles.badge}>{itemsQuantity}</span>
            </button>
            {/* opened */}
            {!isRightSideBarOpen && (
                <a
                    className={`${styles["burger-toggle-button"]}`}
                    onClick={toggleRightSideBarHandler}
                    href="#"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#e3e3e3"
                    >
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </a>
            )}

            {/* closed */}
            {isRightSideBarOpen && (
                <a
                    className={`${styles["burger-toggle-button"]}`}
                    onClick={toggleRightSideBarHandler}
                    href="#"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#e3e3e3"
                    >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </a>
            )}
        </div>
    );
};

export default HeaderRight;
