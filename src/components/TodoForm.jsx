import React, { useEffect,useState } from 'react'
import Input from './Input'
import TodoItem from './TodoItem'
import { useSelector,useDispatch } from 'react-redux'
import { setTodo } from '../features/TodoSlice'

// import { useEffect } from 'react'

function TodoForm() {
    
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todos)
 
    useEffect(()=>{
        console.log(("getItem"));
        
        const prevTodo=JSON.parse(localStorage.getItem("todos"))

        if(prevTodo && prevTodo.length>0)
        {
            dispatch(setTodo(prevTodo))
        }
        console.log(todos);
        
    },[dispatch])

    useEffect(()=>{
        console.log("setItem");
        
        localStorage.setItem("todos",JSON.stringify(todos))
        // console.log(todos);
        
    },[todos])

   
    // useEffect(() => {
        
    // }, [])
    console.log(todos);
    
  return (
    <>
        <Input/>
        
        <div>
            {
                todos.map(
                    (todo)=><div key={todo.todoId}>
                        <TodoItem todo={todo}/>
                    </div>)
            }
        </div>

    </>
  )
}

export default TodoForm