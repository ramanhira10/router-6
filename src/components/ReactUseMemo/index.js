/**
 * In the following example, the expansive function will only run when the count is changed not when the todo's are added
 */

import { useState, useMemo } from 'react';

const expansiveCalculation = num => {
    console.log('Calculating ...');

    for (let i=0;i<100000000;i++) {
        num += 1;
    }

    return num;
};


const ReactUseMemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const calculation = useMemo(() => expansiveCalculation(count), [count]);

    const increment = () => {
        setCount(c => c + 1);
    };

    const addTodo = () => {
        setTodos(t => [...t, 'New Todo']);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {
                    todos.map((todo, index) => {
                        return (
                            <p key={index}>{todo}</p>
                        );
                    })
                }
                <button onClick={addTodo}>Add Todo</button>
            </div>
            
            <hr />

            <div>
                Count: {count}

                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                <p>{calculation}</p>
            </div>
        </div>
    );
};

export default ReactUseMemo;