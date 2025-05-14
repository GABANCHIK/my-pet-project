import { useDispatch } from "react-redux";
import styles from "./HeaderMiddle.module.css";
import { headerActions } from "../../store/header-slice";
const HeaderMiddle = () => {
    const dispatchAction = useDispatch();
    const scrollToFooterHandler = (event) => {
        event.preventDefault();
        dispatchAction(headerActions.scrollToFooterHandler());
    }
    const scrollToHeaderHandler = (event) => {
        event.preventDefault();
        dispatchAction(headerActions.scrollToHeaderHandler());
    }
    const scrollToProductsHandler = (event) => {
        event.preventDefault();
        dispatchAction(headerActions.scrollToProductsHandler());
    }
    return (
        <div>
            <a
                href="#"
                className={`${styles.hideOnMobile} ${styles["nav-item"]}`}
                onClick={scrollToFooterHandler}
            >
                ABOUT
            </a>
            <a
                href="#"
                className={`${styles.hideOnMobile} ${styles["nav-item"]}`}
                onClick={scrollToHeaderHandler}
            >
                HOME
            </a>
            <a
                href="#"
                className={`${styles.hideOnMobile} ${styles["nav-item"]}`}
                onClick={scrollToProductsHandler}
            >
                PRODUCTS
            </a>
            <a
                href="#"
                className={`${styles.hideOnMobile} ${styles["nav-item"]}`}
                onClick={scrollToFooterHandler}
            >
                LOCATION
            </a>
        </div>
    );
};

export default HeaderMiddle;
