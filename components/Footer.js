import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="background" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE HAVE THE TWD PIZZA. WELL BAKED SLICE OF PIZZA.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        45 AwadhPuri #304.
                        <br /> Bhopal, 85022
                        <br /> (+91) 86735-10103
                    </p>
                    <p className={styles.text}>
                        2378 M.P. Nagar #265.
                        <br /> Bhopal, 88022
                        <br /> (+91) 44867-10114
                    </p>
                    <p className={styles.text}>
                        2145 Bittan Market #104.
                        <br /> Bhopal, 82022
                        <br /> (+91) 11867-10123
                    </p>
                    <p className={styles.text}>
                        1614 New Market #125.
                        <br /> Bhopal, 3245
                        <br /> (+91) 33867-10133
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY - FRIDAY
                        <br /> 9:00 – 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 – 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
