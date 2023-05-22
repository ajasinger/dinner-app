import styles from "@/styles/AnswerBlock.module.css";
import { useState } from "react";

const AnswerBlock = ({formResponse}) => {
    const [recommendations, setRecommendations] = useState("");
    const [recsLoading, setRecsLoading] = useState(false);
    const [recsError, setRecsError] = useState(false);

    return (
        <div className={styles.answerBlock}>
            <h2 className={styles.header}>Your Restaurants:</h2>
            { recsLoading && "Please wait..."}
            { recsError && "Something went wrong, please try again..."}
            { recommendations && <p>{recommendations}</p>}
            <div className={styles.buttonSection}>
                <button className={styles.lilacButton}>Share list</button>
                <button className={styles.violetButton}>Return to last search</button>
                <button className={styles.blueButton}>Start new search</button>
            </div>
        </div>
    );
}

export default AnswerBlock;