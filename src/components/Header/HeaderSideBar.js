import { useSelector } from "react-redux";
import styles from "./HeaderSideBar.module.scss";

const HeaderSideBar = (props) => {
    const isRightSideBarOpen = useSelector(
        (state) => state.main.isRightSideBarOpen
    );
    
    return (
        <div
            className={`${styles["right-sidebar"]} ${
                isRightSideBarOpen ? styles.active : ""
            }`}
        >
            {props.links.map((link) => {
                return (
                    <a
                        key={link.label}
                        href="#"
                        className={`${
                            link.mobileOnly ? styles.showOnMobile : ""
                        } ${styles["sidebar-item"]}`}
                        onClick={link.scrollHandler}
                    >
                        {link.label}
                    </a>
                );
            })}
        </div>
    );
};

export default HeaderSideBar;
