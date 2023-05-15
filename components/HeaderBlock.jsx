import styles from '@/styles/HeaderBlock.module.css'

const HeaderBlock = () => {
    return (
        <div className={styles.header}>
            <div className="ramen">&#1F35C</div>
            <div className="taco">&#1F32E</div>
            <div className="pizza">&#1F355</div>
            <div className="sushi">&#1F359</div>
            <div className="spaghetti">&#1F35D</div>
            <div className="salad">&#1F957</div>
            <div className="hamburger">&#1F354</div>
            <h1 className={styles.title}>Who's Coming to Dinner</h1>
            <h3>
                Your AI enabled New York restaurant finder &mdash; find the most convenient 
                (and tasty) restaurant for you and your crew.
            </h3>
        </div>
    );
}

export default HeaderBlock;