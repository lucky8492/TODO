import React, { useContext } from "react";
import { createContext } from "react";


export const Todocontext =createContext({
    todos:[
       {
        id:1,
        todo:"todomsg",
        completed:true,
       }
    ],
     addTodo:(todo)=>{},
     updateTodo : (id , todo )=> {},
     deleteTodo : (id) => {},
     toggleComplete :(id) => {}
})

export const useTodo = () => {
    return useContext(Todocontext); 
}

export const TodoProvider = Todocontext.Provider;