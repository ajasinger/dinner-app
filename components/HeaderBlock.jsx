import { sora, spaceMono } from "../utils/fonts";

const HeaderBlock = () => {
    return (
        <div className="header-block">
            <h1 className={sora.className}>Who's Coming to Dinner</h1>
            <h2 className={spaceMono.className}>
                Your AI enabled New York restaurant finder &mdash; find the most convenient 
                (and tasty) restaurant for you and your crew.
            </h2>
        </div>
    );
}

export default HeaderBlock;