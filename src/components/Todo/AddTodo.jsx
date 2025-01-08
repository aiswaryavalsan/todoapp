import React, { useState } from 'react'

const AddTodo = (props) => {
    const[todo,setTodo]=useState('');
    const submitHandler=(e)=>{
      e.preventDefault();
      props.onSubmit(todo);


    }
    const onChangeHandler=(e)=>{
        setTodo({id:Math.random().toString(),item:e.target.value});

    }
  return (
    <>
    <form onSubmit={submitHandler}>
        <input type="text" onChange={onChangeHandler}>
        </input>
        <button type="submit">ADD</button>
    </form>
    </>
  )
}

export default AddTodo