/**
 * 
 * Problem: referential equality
 * 
 * Todos component will only re-renders when the todos prop changes.
 */

import { useState, useCallback } from "react";
import Todos from "./Todos";

const ReactUseCallBack = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount(c => c + 1);
    };

    const addTodo = useCallback(() => {
        setTodos(t => setTodos([...t, 'New Todo']));
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />

            <div>
                <p>Count: {count}</p>
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default ReactUseCallBack;