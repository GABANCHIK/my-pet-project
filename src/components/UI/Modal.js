import { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { mainActions } from "../../store/main-slice";

const Backdrop = () => {
    const dispatchAction = useDispatch();

    const cartVisibiltyToggle = () => {
        dispatchAction(mainActions.toggleCartVisibility());
    };
    
    return <div onClick={cartVisibiltyToggle} className={styles.backdrop}></div>
};

const ModalWindow = (props) => {
    return (
        <div className={styles.modal}>
            <div>{props.children}</div>
        </div>
    );
};

const portalModal = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portalModal)}
            {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalModal)}
        </Fragment>
    )
};

export default Modal;
