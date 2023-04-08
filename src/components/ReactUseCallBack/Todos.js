import { memo } from 'react';

const Todos = props => {
    console.log('child render');

    const {todos, addTodo} = props;
    return (
        <>
            <h2>My Todos</h2>
            {
                todos.map((todo, index) => {
                    return (
                        <p key={index}>{todo}</p>
                    );
                })
            }

            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};

export default memo(Todos);