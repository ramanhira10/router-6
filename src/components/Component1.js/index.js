import { Link } from "react-router-dom";

const Component1 = () => {
    return (
        <div>
            <h1>Component1</h1>
            <p>
                <Link to="/component2">Link to Component 2</Link>
            </p>

            <p>
                <Link to="/ReactMemo">React Memo</Link>
            </p>

            <p>
                <Link to="/ReactUseMemo">React Use Memo</Link>
            </p>

            <p>
                <Link to="/ReactUseCallBack">React Use Callback</Link>
            </p>
        </div>
    );
};

export default Component1;