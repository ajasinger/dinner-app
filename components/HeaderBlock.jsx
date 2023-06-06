import styles from "./HeaderBlock.module.css";

const HeaderBlock = () => {
    return (
        <div className={styles.header}>
            {/* <h3 className={styles.login}>Login</h3> */}
            <div className={styles.headerText}>
                <div className={styles.ramen}>&#127836;</div>
                <div className={styles.taco}>&#127790;</div>
                <div className={styles.pizza}>&#127829;</div>
                <div className={styles.sushi}>&#127833;</div>
                <div className={styles.pancakes}>&#129374;</div>
                <div className={styles.pita}>&#129369;</div>
                <div className={styles.hamburger}>&#127828;</div>
                <h1 className={styles.title}>Who's Coming to Dinner</h1>
                <h3 className={styles.subtitle}>
                    Your AI enabled New York restaurant finder &mdash; find the most convenient 
                    (and tasty) restaurant for you and your crew.
                </h3>
            </div>
        </div>
    );
}

export default HeaderBlock;