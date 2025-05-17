import styles from "./CartForm.module.scss";
import useInput from "../../hooks/use-input";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../../store/main-slice";
import { cartActions, sendCartData } from "../../store/cart-slice";

const CartForm = () => {
    const dispatchAction = useDispatch();
    const closeFormHandler = () => {
        dispatchAction(mainActions.toggleCartVisibility());
    };
    const cartData = useSelector((state) => state.cart);

    const {
        value: enteredCity,
        hasError: hasCityInputError,
        isValid: isCityInputValid,
        resetValues: resetCityValues,
        inputChangeHandler: inputChangeCityHandler,
        inputLostFocusHandler: inputLostFocusCityHandler,
    } = useInput((value) => value.trim() !== "");
    const {
        value: enteredAddress,
        hasError: hasAddressInputError,
        isValid: isAddressInputValid,
        resetValues: resetAddressValues,
        inputChangeHandler: inputChangeAddressHandler,
        inputLostFocusHandler: inputLostFocusAddressHandler,
    } = useInput((value) => value.trim() !== "");
    const {
        value: enteredNumber,
        hasError: hasNumberInputError,
        isValid: isNumberInputValid,
        resetValues: resetNumberValues,
        inputChangeHandler: inputChangeNumberHandler,
        inputLostFocusHandler: inputLostFocusNumberHandler,
    } = useInput((value) => /^\d+$/.test(value)); //ONLY NUMBERS REGEXP

    let isFormValid = false;
    if (isCityInputValid && isAddressInputValid && isNumberInputValid) {
        isFormValid = true;
    } else {
        isFormValid = false;
    }

    const cartFormSubmitHandler = (event) => {
        event.preventDefault();
        if (!isCityInputValid || !isAddressInputValid || !isNumberInputValid) {
            return;
        }
        resetCityValues();
        resetAddressValues();
        resetNumberValues();
        dispatchAction(
            sendCartData({
                ...cartData,
                userInfo: {
                    city: enteredCity,
                    address: enteredAddress,
                    number: enteredNumber,
                },
            })
        );
        dispatchAction(cartActions.cartFormSendHandler());
    };

    const cityInputClasses = `${styles["form-control"]} ${
        hasCityInputError ? styles["form-invalid"] : ""
    }`;
    const addressInputClasses = `${styles["form-control"]} ${
        hasAddressInputError ? styles["form-invalid"] : ""
    }`;
    const numberInputClasses = `${styles["form-control"]} ${
        hasNumberInputError ? styles["form-invalid"] : ""
    }`;

    return (
        <form className={styles.form} onSubmit={cartFormSubmitHandler}>
            <div className={cityInputClasses}>
                <label htmlFor="city">City</label>
                <input
                    value={enteredCity}
                    onChange={inputChangeCityHandler}
                    onBlur={inputLostFocusCityHandler}
                    id="city"
                    placeholder="Input your city"
                    type="text"
                />
                {hasCityInputError && (
                    <p className={styles["form-error-text"]}>NEED TO INPUT CITY</p>
                )}
            </div>
            <div className={addressInputClasses}>
                <label htmlFor="address">Address</label>
                <input
                    value={enteredAddress}
                    id="address"
                    placeholder="Input your address"
                    type="text"
                    onChange={inputChangeAddressHandler}
                    onBlur={inputLostFocusAddressHandler}
                />
                {hasAddressInputError && (
                    <p className={styles["form-error-text"]}>
                        NEED TO INPUT ADDRESS
                    </p>
                )}
            </div>
            <div className={numberInputClasses}>
                <label htmlFor="number">Phone number</label>
                <input
                    value={enteredNumber}
                    id="number"
                    placeholder="Input your number"
                    type="tel"
                    onChange={inputChangeNumberHandler}
                    onBlur={inputLostFocusNumberHandler}
                />
                {hasNumberInputError && (
                    <p className={styles["form-error-text"]}>NEED TO INPUT NUMBER</p>
                )}
            </div>
            <div className={styles["form-actions"]}>
                <button
                    onClick={closeFormHandler}
                    className={styles["cart-close-btn"]}
                >
                    Close
                </button>
                <button
                    className={styles["cart-send-btn"]}
                    disabled={!isFormValid}
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default CartForm;
