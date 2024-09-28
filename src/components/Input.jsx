import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/TodoSlice'
function Input() {

  const dispatch=useDispatch();
    const [task,setTask]=useState("")

    const colors=["#EAD8B1","#C68FE6","#F05A7E","#FAFFAF","#7D8ABC","#73EC8B","#FEAE6F"]

    const randomColor=(colors)=>{
        const ind=Math.floor(Math.random()*colors.length)
        return colors[ind];
    }
    
    
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        const color=randomColor(colors)
        if(task)
        {
          dispatch(addTodo({task:task,color:color}))
        }
        else
        {
          alert("Please enter  a task ")
        }
        setTask('')
        
    }
  return (
    <>
      <div className='flex justify-center text-2xl font-serif mt-10  text-black'>
            <form onSubmit={handleSubmit} >
            {/* <label htmlFor="input"
            className='text-black m-3' >  Task : </label> */}
            
            <input
                id="input"
                type='text'
                required
                value={task}
                placeholder='Enter your challenge'
                onChange={(e)=>setTask(e.target.value)}
                className='bg-[#ffffff] p-2 rounded-l-lg  text-black w-3/4'
            />
            <button className="bg-black text-white rounded-r-lg p-2" type='submit'>Add</button>

            </form>
        </div>
    </>
  )
}

export default Input