import React from "react"
import { useSelector } from "react-redux"

import TodoForm from "./components/TodoForm";
function App() {
  
  return (
    <div>
      <h1 className="text-6xl text-center m-5 font-serif text-black"> welcome to your TaskList </h1>
      <TodoForm/>
      
    </div>
  )
}

export default App
