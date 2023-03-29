import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Who's Coming to Dinner</title>
        <meta name="description" content="Restaurant finder app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="title-block">
          <h1>Who's Coming to Dinner</h1>
          <h2>Your AI enabled restaurant finder</h2>
        </div>
        <form className="form-block">
          {/* 
          locations (up to 5) [numbered]
          method of transportation [check boxes?]
          food preferences [check boxes?]
          price point [check boxes?]
          */}
        </form>
        <div className="answer-block">
          <h2>Your Recommendation:</h2>
        </div>
      </main>
    </div>
  )
}
