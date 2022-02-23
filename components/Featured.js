import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    <Image src="/img/pizza1.jpg" alt="pizza" layout="fill" objectFit="contain" />
                </div>
            </div>
        </div>
    );
};

export default Featured;