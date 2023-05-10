import { useState } from "react";

const AnswerBlock = ({formResponse}) => {
    const [recommendations, setRecommendations] = useState("");
    const [recsLoading, setRecsLoading] = useState(false);
    const [recsError, setRecsError] = useState(false);

    return (
        <div className="answer-block">
            <h2>Your restaurants:</h2>
            { recsLoading && "Please wait..."}
            { recsError && "Something went wrong, please try again..."}
            { recommendations && <p>{recommendations}</p>}
            <button>Share list</button>
            <button>Save list</button>
        </div>
    );
}

export default AnswerBlock;