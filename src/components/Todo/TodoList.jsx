import React, { useState } from 'react'
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todolist,setTodolist]=useState([]);
    const getTodo=(todo)=>{
      setTodolist((prevState)=>[...prevState,todo]);
    }
    const deleteHandler=(id)=>{
     const updateList=  todolist.filter(item=>item.id!==id);
     setTodolist(updateList);
    }
  return (
    <>
    <AddTodo onSubmit={getTodo}/>
    <TodoItem todolist={todolist} onDelete={deleteHandler}/>
    </>
  )
}

export default TodoList