import ProductCard from "./ProductCard"
import styles from "../styles/ProductList.module.css";

const ProductList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN CITY</h1>
            <p className={styles.desc}>
            Order your favourites from City Hut and get 25% Off upto Rs.300 on minimum order of Rs.600.
            </p>
            <div className={styles.wrapper}>
                <ProductCard imgNo="1" title="Margarita Pizza" desc="Classic cheese. Contains 100% real mozzarella cheese." price="₹129" />
                <ProductCard imgNo="2" title="Classic Corn Pizza" desc="Cheese and corn. Contains 100% real mozzarella cheese." price="₹159" />
                <ProductCard imgNo="3" title="Double Cheese Pizza" desc="Loaded with extra cheese. Contains 100% real mozzarella cheese." price="₹159" />
                <ProductCard imgNo="4" title="Veggie Lover Pizza" desc="Onion, capsicum, tomato, mushroom and red paprika." price="₹189" />
                <ProductCard imgNo="5" title="Veggie Spicy Pizza" desc="Tomato, onion, red paprika and jalapeno with mozzarella cheese." price="₹189" />
                <ProductCard imgNo="6" title="Peppy Paneer Pizza" desc="Paneer, capsicum and red paprika. Contains real mozzarella cheese." price="₹209" />
                <ProductCard imgNo="7" title="Paneer Makhan Pizza" desc="Indian paneer and capsicum with makhani sauce" price="₹209" />
                <ProductCard imgNo="8" title="Tandoori Pizza" desc="Paneer tikka with capsicum and red paprika" price="₹229" />

            </div>
        </div>
    )
}

export default ProductList