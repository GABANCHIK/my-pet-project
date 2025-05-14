import { useState } from "react";

const useInput = (validateFormFunc) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [wasInputTouched, setWasInputTouched] = useState(false);

    const isValueValid = validateFormFunc(enteredValue);
    const isInputInvalid = !isValueValid && wasInputTouched;

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputLostFocusHandler = () => {
        setWasInputTouched(true);
    };

    const resetValues = () => {
        setEnteredValue("");
        setWasInputTouched(false);
    };
    return {
        value: enteredValue,
        hasError: isInputInvalid,
        isValid: isValueValid,
        resetValues,
        inputChangeHandler,
        inputLostFocusHandler,
    };
};

export default useInput;
