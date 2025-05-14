import styles from "./SecondSection.module.css";
import PIZZA_INFO from "../../constants/pizza-info";
import PizzaItem from "./PizzaItem";

const SecondSection = () => {
    return (
        <div className={styles["secound-section-wrapper"]}>
            <div className={styles["new-products-container"]}>
                <h2 className={styles["new-products-text"]}>
                    Our newest products
                </h2>
                <div className={styles["new-products-info-container"]}>
                    {PIZZA_INFO.map((pizza) => {
                        return (
                            <div key={pizza.name} className={styles["card"]}>
                                <img
                                    src={`${pizza.image}`}
                                    alt={`${pizza.name}`}
                                />
                                <div className={styles["card-content"]}>
                                    <h3>
                                        {pizza.name !== "Mushroom"
                                            ? `Pizza ${pizza.name}`
                                            : `${pizza.name} Pizza`}
                                    </h3>
                                    <p>{pizza.description}</p>
                                    <PizzaItem
                                        key={pizza.id}
                                        title={pizza.name}
                                        price={pizza.price}
                                        id={pizza.id}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SecondSection;
