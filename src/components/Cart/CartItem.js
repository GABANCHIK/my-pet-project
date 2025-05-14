import { useDispatch, useSelector } from "react-redux";
import styles from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
    const itemsQuantity = useSelector(state => state.cart.itemsQuantity);
    const { id, price, title, description, quantity } = props;
    const dispatchAction = useDispatch();
    const addItemHandler = () => {
        dispatchAction(cartActions.addItem({ id, price, title, description }));
    };
    const removeItemHandler = () => {
        if (itemsQuantity === 1) {
            dispatchAction(cartActions.closeOrderMenu());
        }
        dispatchAction(cartActions.removeItem(id));
    };
    return (
        <li>
            <div className={styles["cart-item"]}>
                <h2>{title} pizza</h2>
                <div className={styles.content}>
                    <div className={styles["price-container"]}>
                        <span className={styles.price}>
                            ${price.toFixed(2)}
                        </span>
                        <span>{`x${quantity}`}</span>
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={removeItemHandler}>-</button>
                        <button onClick={addItemHandler}>+</button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
