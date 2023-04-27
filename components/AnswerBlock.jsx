
// define formResponse

const AnswerBlock = ({formResponse}) => {
    return (
        <div className="answer-block">
            <h2>Your restaurants</h2>
            <p>{formResponse.text}</p>
            <button>Share list</button>
            <button>Save list</button>
        </div>
    );
}

export default AnswerBlock;