import { useDispatch } from "react-redux";
import { headerActions } from "../../store/header-slice";
import styles from "./Header.module.css";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";
import HeaderSideBar from "./HeaderSideBar";
import { mainActions } from "../../store/main-slice";
import { cartActions } from "../../store/cart-slice";

const Header = () => {
    const dispatchAction = useDispatch();

    const scrollToFooterHandler = () => {
        dispatchAction(headerActions.scrollToFooterHandler());
    };
    const scrollToHeaderHandler = () => {
        dispatchAction(headerActions.scrollToHeaderHandler());
    };
    const scrollToProductsHandler = () => {
        dispatchAction(headerActions.scrollToFooterHandler());
    };

    const cartVisibiltyToggle = () => {
        dispatchAction(mainActions.toggleCartVisibility());
        dispatchAction(cartActions.resetOrderStatus());
    };

    const HEADER_LINKS = [
        {
            label: "HOME",
            mobileOnly: false,
            isButton: false,
            scrollHandler: scrollToHeaderHandler,
        },
        {
            label: "ABOUT",
            mobileOnly: false,
            isButton: false,
            scrollHandler: scrollToFooterHandler,
        },
        {
            label: "PRODUCT",
            mobileOnly: false,
            isButton: false,
            scrollHandler: scrollToProductsHandler,
        },
        {
            label: "LOCATION",
            mobileOnly: false,
            isButton: false,
            scrollHandler: scrollToFooterHandler,
        },
        {
            label: "CART",
            mobileOnly: true,
            isButton: false,
            scrollHandler: cartVisibiltyToggle,
        },
    ];

    return (
        <nav className={styles.nav}>
            <div>VOLARBEBE PIZZA</div>

            <HeaderMiddle links={HEADER_LINKS} />
            <HeaderRight links={HEADER_LINKS} />
            <HeaderSideBar links={HEADER_LINKS} />
        </nav>
    );
};

export default Header;
