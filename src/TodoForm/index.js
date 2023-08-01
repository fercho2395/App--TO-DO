import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";


function TodoForm(){

  const [newTodoValue, setNewTodoValue] = React.useState('');
  // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  
  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCacel = () => {
    setOpenModal(false);
  }
  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue('')
  };
  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TO-DO</label>
        <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Jugar futbol en la noche"
        />
        <div className="TodoForm-buttonContainer">
        <button 
        className="TodoForm-button--cancel"
        type="button" 
        onClick={onCacel}
        >
          Cancelar
        </button>
        <button 
        className="TodoForm-button--add"
        type="submit"
        >
          Agregar
        </button>
        </div>
    </form>
  )
}


export {TodoForm};