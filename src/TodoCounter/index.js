import React from "react";
import "./TodoCounter.css"
import { TodoContext } from "../TodoContext";


function TodoCounter(/*props { total, completed }*/){
    const { totalTodos, completedTodos} = React.useContext(TodoContext);
    
    return(
        <h2 className="Title">Has completado {completedTodos} de {totalTodos} todos</h2>
    )
}


export { TodoCounter };