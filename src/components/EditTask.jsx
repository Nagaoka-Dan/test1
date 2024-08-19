import { useEffect, useState } from "react";

const EditTask=({task,index,taskList,setTaskList}) =>{
    const [EditModel,setEditModel]=useState(false);
    const [projectName, SetProjectName]=useState("");
    const [taskDescription, SetDescription]=useState("");

    useEffect(()=> {
        SetProjectName(task.projectName);
        SetDescription(task.taskDescription);
    },[])
    

    const handleInput=e=>{
        const {name,value}=e.target;
        
        if (name==="projectName") SetProjectName(value);
        if (name==="taskDescription") SetDescription(value);
    }

    const handleUpdate=e=>{
        e.preventDefault();
        let taskIndex=taskList.indexOf(task);
        taskList.splice(taskIndex,1);
        setTaskList(
            [...taskList,{projectName,taskDescription}]
        );
        setEditModel(false);
    }


    return (
        <>
        <button className="bg-gray-400 text-white text-sm uppercase font-semibold py-2 px-3 rounded-lg " onClick={()=>setEditModel(true)}>Edit</button>

        {EditModel ? (
            <>
            <div className="flex items-center justify-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-100 ">
                <div className="w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col">
                <div className="flex flex-row justify-between p-5 border-b border-slate-200 rounded-t">
                    <h3 className="bg-white text-3xl font-semibold ">Edit Task</h3>
                <button 
                className="px-1 text-gray-500 float-right text-3xl leading-none font-semibold block" 
                onClick={()=> setEditModel(false)}
                >X</button>
                </div>
                <form className="p-6">
                    <div>
                    <label className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block" htmlFor="Project-Name">Project Name</label>
                    <input className="w-full bg-gray-200 text-gray-700 border-gray-200
                    rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white" type="text" id="Project-Name" placeholder="enter project name" required 
                    name="projectName" value={projectName} onChange={handleInput} />
                </div>
                <div>
                    <label className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block" 
                    htmlFor="task-description">task description</label>
                    <textarea name="taskDescription" value={taskDescription} onChange={handleInput} id="task-description" rows="5" placeholder="teak description" 
                    className="w-full bg-gray-200 text-gray-700 border-gray-200
                    rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white" 
                     ></textarea>
                </div>
                </form>
                <div className="flex justify-end p-6 border-t border-slate-200 rounded-b ">
                    <button className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70  " 
                    onClick={handleUpdate}
                    >Update Task</button>
                </div>
                </div>
            </div>
            
            
            
            </>

        ): null }
    </>)
}
export default EditTask;