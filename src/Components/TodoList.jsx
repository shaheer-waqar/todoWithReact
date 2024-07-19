import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiSave } from "react-icons/fi";


function TodoList({todo,setTodo,deltetodo}) {

    let [editInp,setEditInp] = useState("")
    let [editable,setEditable] = useState(false);

    const editTodo = (e,i)=>{
        if(e.id === i){
        setEditable((prev)=> !prev);
        setEditInp(e.name)   
        }
    }
    const save =(i)=>{
        if(i === todo.id){
            if(editInp == ""){
              alert("you cannot add empty value ");
            }else{
              todo.name = editInp
              setEditable((prev) => !prev)
            }
        }
    }
    
  return (
            <div className='flex gap-1'>
              <div className='w-9/12'>
                {
                 !editable ?
                 <p className='break-words'>{todo.name}</p>
                 :
                 <input type="text" className='w-full border-2 px-2 h-full outline-pink-700 ' value={editInp} onChange={(event,i)=>setEditInp(event.target.value)} />
                }
              </div>
              <div className='w-3/12 flex gap-1 h-[30px]'>
               {
                !editable ?
                 <div onClick={()=>editTodo(todo,todo.id)} className='w-6/12 bg-gradient-to-tl from-purple-700 to-pink-700 text-xl font-bold py-1  text-white flex justify-center items-center'>
                    <CiEdit/>
                 </div> 
                 :
                 <div onClick={()=>save(todo.id)} className='w-6/12 bg-gradient-to-tl from-purple-700 to-pink-700 text-xl font-bold py-1  text-white flex justify-center items-center'>
                     <FiSave/>
                 </div> 

               }
                 <div 
                    onClick={()=>deltetodo(todo.id)}
                    className='w-6/12 bg-gradient-to-tl from-purple-700 to-pink-700 font-semibold text-white flex justify-center items-center'>
                     <MdOutlineDeleteOutline/>
                 </div>
              </div>
            </div> 

    
  )
}

export default TodoList