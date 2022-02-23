import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image
                                    src="/img/pizza1.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="pizza"
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Peppy Paneer Pizza</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredient, Extra Paneer
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>₹299</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>₹598</span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image
                                    src="/img/pizza2.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Tandoori Pizza</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Extra Cheese, Spicy Makhani
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>₹229</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>1</span>
                        </td>
                        <td>
                            <span className={styles.total}>₹229</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>₹827
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>₹0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>₹827
                    </div>
                    <button className={styles.button}>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
