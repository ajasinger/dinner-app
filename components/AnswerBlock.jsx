
// define formResponse
const AnswerBlock = ({formResponse}) => {
    return (
        <div className="answer-block">
            <p>{formResponse.text}</p>
        </div>
    );
}

export default AnswerBlock;