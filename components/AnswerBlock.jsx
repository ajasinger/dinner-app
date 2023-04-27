import { sora, spaceMono } from "../utils/fonts";

// define formResponse

const AnswerBlock = ({formResponse}) => {
    return (
        <div className="answer-block">
            <h2 className={spaceMono.className}>Your restaurants</h2>
            <p className={sora.className}>{formResponse.text}</p>
            {/* how to separate out this styling??? */}
            <button className={`${spaceMono.className} ${styles.purpleButton}`}>Share list</button>
            <button className={`${spaceMono.className} ${styles.lilacButton}`}>Save list</button>
        </div>
    );
}

export default AnswerBlock;