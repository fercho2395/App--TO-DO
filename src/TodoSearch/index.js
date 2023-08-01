import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch(/*{ searchValue, setSearchValue }*/){

    const { searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input 
          className="TodoSearch" 
          placeholder='cebolla'
          value={searchValue} 
          onChange={onSearchValueChange}
        />
    );
}


export { TodoSearch };