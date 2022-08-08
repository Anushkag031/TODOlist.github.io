import React from 'react'

export const TodoList = (props) => {
    
    return (
        <>
            <div className="todo_style">
                <i className="bi bi-backspace-reverse-fill"
                    onClick={() => {
                        props.onSelect(props.id);
                }}></i> 
                
                <li>{props.text}</li>
            </div>
        </>
    );
};
export default TodoList


