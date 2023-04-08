import { useState } from 'react';

import Todos from './Todo';

const ReactMemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['Todo 1', 'Todo 2']);

    const increment = () => {
        setCount(c => c + 1);
    };

    return (
        <>
            <Todos todos={todos} />

            <hr />

            <div>
                Count: {count}

                <button onClick={increment}>+</button>

            </div>
        </>
    );
};

export default ReactMemo;