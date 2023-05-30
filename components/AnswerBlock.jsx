import styles from "./AnswerBlock.module.css";
import { useState } from "react";

const AnswerBlock = ({restaurantRecs}) => {
    const [recsLoading, setRecsLoading] = useState(false);
    const [recsError, setRecsError] = useState(false);

    return (
        <div className={styles.answerBlock}>
            <h2 className={styles.header}>Your Restaurants:</h2>
            {/* animate this?? */}
            { recsLoading && <p>Restaurant recommendations calculating...</p> }
            { recsError && <p>Something went wrong, please try again.</p> }
            { restaurantRecs && <p>{restaurantRecs}</p>}
            <div className={styles.buttonSection}>
                <button className={styles.lilacButton}>Share list</button>
                <button className={styles.violetButton}>Return to last search</button>
                <button className={styles.blueButton}>Start new search</button>
            </div>
        </div>
    );
}

export default AnswerBlock;