import { Fragment } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";

const App = () => {
    const isCartVisible = useSelector((state) => state.main.isCartVisible);
    return (
        <Fragment>
            <Header/>
            <Main />
            {isCartVisible && <Cart/>}
        </Fragment>
    );
};

export default App;
