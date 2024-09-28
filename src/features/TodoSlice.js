import {createSlice} from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState={
    todos:[]
}

export const todoSlice=createSlice({
    name : "todoReducer",
    initialState,

    reducers:{
        addTodo:(state,action)=>{
            const id=nanoid()
            const todo={
                todoId:id,
                task:action.payload.task,
                completed:false,
                color:action.payload.color
            }

            state.todos.push(todo);
        },
        
        setTodo:(state,action)=>{
            state.todos=action.payload
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.todoId!==action.payload)
        },

        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.todoId===action.payload.todoId ?
             {...todo,task:action.payload.task,completed:action.payload.completed}
             :todo);
        }

    }

})

export const {addTodo,removeTodo,setTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer