import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div> 
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum cheems doge walter. Lorem ipsum cheems doge walter. Lorem ipsum cheems doge walter. Lorem ipsum cheems doge walter. Lorem ipsum cheems doge walter.Lorem ipsum cheems doge walter. Lorem ipsum cheems doge walter.</p>
        <p className={styles.text}>Lorem ipsum cheems doge walter. Lorem ipsum cheems doge walter. Lorem ipsum cheems doge walter. Lorem ipsum cheems doge walter. Lorem ipsum cheems doge walter.Lorem ipsum cheems doge walter. Lorem ipsum cheems doge walter.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>
            see Ninja Listing
          </a>
        </Link> 
      </div>
    </>
  )
};

