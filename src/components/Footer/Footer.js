import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles["footer-logo-item"]}>VOLARBEBE PIZZA</div>
            <div className={styles["footer-item"]}>
                <div>
                    <a href="#">Privacy Policy </a>
                </div>
                <div>
                    <a href="#">About</a>
                </div>
                <div>
                    <a href="#">Vacancies</a>
                </div>
            </div>
            <div className={styles["footer-item"]}>
                <div>
                    <a href="#">Reviews</a>
                </div>
                <div>
                    <a href="#">Contacts</a>
                </div>
                <div>
                    <a href="#">Location</a>
                </div>
            </div>
            <div className={styles["footer-item"]}>
                <div>
                    <a href="#">Cookie settings</a>
                </div>
                <div>
                    <a href="#">Social media</a>
                </div>
                <div>
                    <a href="#">Academy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
