import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const PizzaItem = (props) => {
    const { id, price, title } = props;
    const dispatchAction = useDispatch();
    const addItemHandler = () => {
        dispatchAction(cartActions.addItem({ id, price, title }));
    };
    return (
        <div>
            <a onClick={addItemHandler}>ADD TO CART</a>
        </div>
    );
};

export default PizzaItem;
