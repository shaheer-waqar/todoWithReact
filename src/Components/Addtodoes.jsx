import React from 'react'
import { FaPlus } from "react-icons/fa";

function Addtodoes({todoInp ,setTodoInp,Addtodo}) {

    
  return (
    <div>
    <div className='flex gap-2'>
        <div className='w-10/12'>
            <input type="text" 
            className='w-full px-2 py-1 border-2 outline-pink-700'
            placeholder='Add Your Todo'
            value={todoInp}
            onChange={(e)=>setTodoInp(e.target.value)}
            />
        </div>
        <div onClick={Addtodo}
        className='bg-gradient-to-tl to-purple-700 form-pink-800 font-semibold  text-white w-2/12 flex justify-center items-center '
        >
            <FaPlus/>
        </div>
    </div>
    <div className='w-full border-2 mt-4 border-purple-700'></div>
        
    </div> 
  )
}

export default Addtodoes