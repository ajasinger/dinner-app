import styles from '@/styles/HeaderBlock.module.css'

const HeaderBlock = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Who's Coming to Dinner</h1>
            <h3>
                Your AI enabled New York restaurant finder &mdash; find the most convenient 
                (and tasty) restaurant for you and your crew.
            </h3>
        </div>
    );
}

export default HeaderBlock;