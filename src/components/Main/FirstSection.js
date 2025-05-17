import { useDispatch } from "react-redux";
import styles from "./FirstSection.module.scss";
import { headerActions } from "../../store/header-slice";


const FirstSection = () => {
    const dispatchAction = useDispatch();
    const scrollToFooterHandler = (event) => {
        event.preventDefault();
        dispatchAction(headerActions.scrollToProductsHandler());
    }
    return (
        <div className={styles["first-section-wrapper"]}>
            <div className={styles["main-text-container"]}>
                <h1 className={styles["main-pizza-text"]}>
                    <span>VOLARBEBE PIZZA</span>
                    <span>best choice for you</span>
                </h1>
                <div className={styles["main-small-pizza-text"]}>
                    Free pizza delivery
                </div>
                <a
                    href="#"
                    className={styles["main-order-button"]}
                    onClick={scrollToFooterHandler}
                >
                    Make Order
                </a>
            </div>
        </div>
    );
};

export default FirstSection;
