import React, { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'

import { MdOutlineEditNote ,MdDeleteForever } from "react-icons/md";

import {updateTodo,removeTodo} from "../features/TodoSlice"

function TodoItem({todo}) {

  console.log(todo);
  
  const dispatch=useDispatch();
  const [inpValue,setInpValue]=useState(todo.task)
  const [complete,setComplete]=useState(todo.completed)
  // to toggle the input field for editable and not editable
  const [isEditable,setIsEditable]=useState(false)
  // to show which tasks are completed
  const handleChange=(e)=>{
      setIsEditable((prev)=>{
       const  editable=!prev
       if(!editable)
       {
          setInpValue(todo.task)
       }
       return editable
  })
   
  }

  useEffect(()=>{
    dispatch(updateTodo({completed:complete,task:inpValue,todoId:todo.todoId}))
  },[inpValue,complete]);

 const changeStatus=()=>{
    setComplete((prevComplete)=>{
    const updatedComplete=!prevComplete 
    dispatch(updateTodo({completed:updatedComplete,task:todo.task,todoId:todo.todoId}))
      return updatedComplete;
    }
   )
   
 }
  return (
    <>
    <div className='flex  w-full justify-center '>
    <div className={`  text-black font-serif text-2xl flex  items-center w-1/2 px-3 py-2 rounded-xl my-2   `} style={{backgroundColor:todo.color}}>
          <input 
          type='checkbox'
          checked={complete}
          onChange={changeStatus}
          className='form-checkbox rounded w-7 h-7 text-center  text-green-800'

          />

          <input
            value={inpValue} 
            disabled={!isEditable}
            // onChange={handleChange}
            onKeyDown={(e)=>e.key==="Enter"?setIsEditable(false):setIsEditable(true)}
            className=' text-center w-full rounded-lg'
            // size={todo.task.length}
            style={{backgroundColor: isEditable?"white": todo.color,
                  textDecoration:complete? "line-through":'none',
                  }}
             onChange={(e)=>setInpValue(e.target.value)}
            />

          <button
          onClick={handleChange}>
          <MdOutlineEditNote className='text-black'/>
          </button>

          <button onClick={()=>dispatch(removeTodo(todo.todoId))}>
            <MdDeleteForever className='text-red-600'/>
          </button>
    </div>
    </div>
    </>
  )
}

export default TodoItem