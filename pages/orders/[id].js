import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
    const status = 0;

    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
    };
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tr className={styles.trTitle}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <span className={styles.id}>345555555</span>
                            </td>
                            <td>
                                <span className={styles.name}>Hiren Pandey</span>
                            </td>
                            <td>
                                <span className={styles.address}>85. Awadhpuri, Bhopal</span>
                            </td>
                            <td>
                                <span className={styles.total}>₹899</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>₹899
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>₹0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>₹899
                    </div>
                    <button disabled className={styles.button}>
                        PAID
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;
