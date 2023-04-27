import { sora, spaceMono } from "../utils/fonts";

// define formResponse

const AnswerBlock = ({formResponse}) => {
    return (
        <div className="answer-block">
            <h2 className={spaceMono.className}>Your restaurants</h2>
            <p className={sora.className}>{formResponse.text}</p>
            <button className={spaceMono.className}>Share list</button>
            <button className={spaceMono.className}>Save list</button>
        </div>
    );
}

export default AnswerBlock;