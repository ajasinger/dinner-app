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
        {/* add in form destination */}
        <form className="form-block" action="/site-here" method="post">
          {/* addreses */}
          <label for="first-address">Address 1:</label>
          <input type="text" id="first-address" name="first-address" required/>
          <label for="second-address">Address 2:</label>
          <input type="text" id="second-address" name="second-address"/>
          <label for="third-address">Address 3:</label>
          <input type="text" id="third-address" name="third-address"/>
          {/* mode of transportation */}
          <label for="transportation">How you're all getting there:</label>
          <input type="radio" id="car" name="transportation" value="car" />
          <label for="car">Car</label>
          <input type="radio" id="pub-transport" name="transportation" value="pub-transport" />
          <label for="pub-transport">Public Transportation</label>
          <input type="radio" id="pub-transport-and-car" name="transportation" value="pub-transport-and-car" />
          <label for="pub-transport-and-car">Public Transportation & Subway</label>
          {/* food types */}
          <label for="food">What type of food you'd like to eat:</label>
          <input type="checkbox" id="food1" name="food1" value="Italian" />
          <label for="food1"> Italian</label>
          <input type="checkbox" id="food2" name="food2" value="American" />
          <label for="food2"> American</label>
          <input type="checkbox" id="food3" name="food3" value="Japanese" />
          <label for="food3"> Japanese</label>
          <input type="checkbox" id="food4" name="food4" value="Mexican" />
          <label for="food4"> Mexican</label>
          <input type="checkbox" id="food5" name="food5" value="Chinese" />
          <label for="food5"> Chinese</label>
          <input type="checkbox" id="food6" name="food6" value="Vegetarian" />
          <label for="food6"> Vegetarian</label>
          <input type="checkbox" id="food7" name="food7" value="any" />
          <label for="food7"> Any type</label>
          {/* price point */}
          <input type="checkbox" id="price1" name="price1" value="inexpensive" />
          <label for="price1"> $$</label>
          <input type="checkbox" id="price2" name="price2" value="moderate-price" />
          <label for="price2"> $$$</label>
          <input type="checkbox" id="price3" name="price3" value="expensive" />
          <label for="price3"> $$$$</label>
          {/* button */}
          <button type="submit">Find me restaurants</button>
        </form>
        <div className="answer-block">
          <h2>Your Recommendation:</h2>
        </div>
      </main>
    </div>
  )
}
