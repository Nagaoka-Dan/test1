import { useState } from 'react';
import './App.css';
import AddTask from './components/addtask';
import ToDo from './components/todo';

function App() {
    const [taskList, setTaskList] = useState([]);
    console.log(taskList);
    return (
        <>
        <h1 className = 'text-2xl font-bold py-4 pl-6' >
        project4 - The Task Tracker </h1> 
        <p className = 'text-xl pl-6 ' > hey i am here </p> 
        <div className = 'flex flex-row items-center' >
        <p className = 'text-xl pl-6 ' > Click </p>
        <AddTask taskList = { taskList }  setTaskList = { setTaskList } /> 
        <p className = 'text-xl my-2' > to add a new task </p> 
        </div>
        {taskList.map((task, i) =>
                <>
               <ToDo  key={new Date().getTime()} task={task} index={i} taskList={taskList} setTaskList={setTaskList} />
                </>

            )
        } 
        </>

    );
}

export default App;