import React, { useState } from 'react'
import Addtodoes from './Addtodoes'
import TodoList from './TodoList'

function TodoContainer() {
    let [todo,setTodo] = useState([]);
    let [todoInp,setTodoInp] = useState("");
    
    let Addtodo  = ()=>{
    if(todoInp !== ""){
        setTodo((prev)=>[{id:Date.now(), name:todoInp},...prev])
        setTodoInp("");
    }else{
        alert("you cannot add empty value ");
    }
    }
    
    const deltetodo = (index)=>{
       const upadated =  todo.filter((element , i) => element.id !== index)
       setTodo(upadated);
    }

  return (
    <div className="h-screen w-full bg-gradient-to-tl from-purple-700 to-pink-700 py-10  font-poppins px-2">
        <div className='bg-white max-w-lg  m-auto py-5 px-3 flex flex-col gap-3 overflow-scroll h-[400px] no-scrollbar'>
            <h1  className='text-center text-2xl font-semibold '>Todo App</h1>
        <Addtodoes todoInp={todoInp} setTodoInp={setTodoInp} Addtodo={Addtodo}/>
        {
            todo.map((todo)=>(
                <TodoList key={todo.id} todo={todo} setTodo={setTodo} deltetodo={deltetodo}
            />
            ))
        }
        </div>
    </div>
  )
}

export default TodoContainer