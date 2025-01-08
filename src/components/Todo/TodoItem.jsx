import React from 'react'

const TodoItem = (props) => {
    const deleteHandler=(id)=>{
        console.log(id)
        props.onDelete(id);
    }
  return (
    <>
    {props.todolist.map(item=>{
        return(
           
            <li key={item.id} onClick={()=>deleteHandler(item.id)}>{item.item}</li>
         
        )
    })}
    </>
  )
}

export default TodoItem