import Head from 'next/head'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Pizza Restaurant</title>
        <meta name="description" content="Best Pizza shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  )
}
