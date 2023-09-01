"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")

  const [taskList, setTaskList]=useState([])
  const deleteHandler=(i)=>{
    let copyTask=[...taskList]
    copyTask.splice(i,1)
    setTaskList(copyTask)
}

  const submitHandler=(e)=>{
    e.preventDefault()
    setTaskList([...taskList, {task, desc}])
    setTask("")
    setDesc("")
  }
  let renderTask=<h2>No Task</h2>
  if(taskList.length>0){
    renderTask=taskList.map((t,i)=>{
      return(
        <li  key={i} className='flex items-center justify-between mb-8'> 
        <div className='flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.task}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button 
        onClick={()=>deleteHandler(i)}
        className='bg-red-500 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      )
    })
  }
  return (
   <>
   <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Ram's To Do List</h1>
   <form onSubmit={submitHandler}>
     <input type="text" 
     className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
     placeholder='Enter Task here' 
     value={task}
     onChange={(e) => setTask(e.target.value)}
     />
     <input type="text" 
     className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder='Enter Description here'
      value={desc}
      onChange={(e) => setDesc(e.target.value)}
       />
     <button 
     className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 '>
      Add Task
      </button>
   </form>
   <hr />
   <div className='p-8 bg-slate-200'>
    <ul>{renderTask}</ul>
    
   </div>
   </>
  )
}

export default page