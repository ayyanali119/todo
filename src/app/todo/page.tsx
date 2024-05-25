"use client"
import React, { useState} from "react";
import { MdDelete } from "react-icons/md";

interface Task{
task: string,
detail: string
}

function Todo () {
    let [task, setTask] = useState("")
    let [detail, setDetail] = useState ("")
    let [mainTask, setMainTask] = useState<Task[]> ([])

//task button working
function taskHandler(e: any) {
    e.preventDefault();
    setTask("");
    setDetail("")
    setMainTask([...mainTask, {task, detail}])
}
let savedTasks:any = <div className="font-bold text-center pt-10 text-6xl
">No Task Available</div>

function deleteHandler(e:any){
    let copyMainTask = [...mainTask];
    copyMainTask.splice(e, 1);
    setMainTask(copyMainTask);
}

  if (mainTask.length > 0) {
    savedTasks = mainTask.map((e)=>{
        return <div className=" flex justify-around py-2 flex-col items-center mb-1 lg:flex-row gap-4">
            <h1 className=" lg:w-1/4 text-wrap text-start font-bold">{e.task}</h1>
            <h1 className=" lg:w-1/4 text-start text-wrap">{e.detail}</h1>
            <button onClick={deleteHandler} className=" lg:w-6 hover:bg-gray-400
            text-black p-1 text-2xl"> <MdDelete /></button>
       
        </div>
    }
)
  }

   

    return(
<div className=" min-h-[calc(100vh-60px)] px-4 py-1">
    <div className=" w-full h-full flex flex-col">
<h1 className=" bg-gray-400 lg:text-3xl text-white font-bold text-center text-sm p-1">Todo App</h1>

<form className=" flex flex-col lg:flex-row gap-2 py-4">
    <input 
    className=" text-sm lg:text-2xl border-black border-2 outline-none rounded p-1" 
    type="text" 
    placeholder="Enter Task Here..."
    value={task}
    onChange={(e)=>{setTask(e.target.value)}}
    />
    <input 
    className="text-sm lg:text-2xl border-black border-2 outline-none rounded p-1"
     type="text" 
     placeholder="Description" 
     value={detail}
     onChange={(e)=>{setDetail(e.target.value)}}
     />
    <button onClick={taskHandler} className="bg-black text-white p-1 text-sm lg:text-2xl font-bold rounded hover:bg-gray-800">Add Task</button>
</form>
<div>
    {savedTasks}
</div>

</div>
</div>
    )
}


export default Todo