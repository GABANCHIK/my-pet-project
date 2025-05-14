import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import styles from "./Main.module.css";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <main className={styles.main}>
            <FirstSection />
            <SecondSection />
            <Footer/>
        </main>
    );
};

export default Main;
