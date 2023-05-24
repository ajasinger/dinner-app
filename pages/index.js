import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import HeaderBlock from '../components/HeaderBlock';
import FormBlock from '../components/FormBlock';
import AnswerBlock from '../components/AnswerBlock';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Who's Coming to Dinner</title>
        <meta name="description" content="AI-enabled restaurant finder app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        < HeaderBlock />
        < FormBlock />
      </main>
    </div>
  )
}
