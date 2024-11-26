
import React, { useState } from 'react';

function ToDoList(){


    const [tasks, setTasks] = useState(["eat","shower", "play"]);
    const [newTask, setNewTask] = useState("");

    function addTask(){
        // add into the arrray
        if(newTask.trim() !== ""){
        setTasks(t=>[...t, newTask])
        setNewTask("");
    }
    else{
        alert("Please input your task !")
    }
    }


    function removeTask(index){

        //update the tasks list by removing the task at the given index
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function prioritiseTask(index){

    // swap two elements within an array
    if (index > 0){
        const updatedTask = [...tasks];
        
        [updatedTask[index], updatedTask[index-1]]  =
        [updatedTask[index-1], updatedTask[index]];
        setTasks(updatedTask);

    }

    }

    function unprioritiseTask(index){
        // swap two elements within an array
        if (index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]]  =
            [updatedTask[index+1], updatedTask[index]];
            setTasks(updatedTask);
    
        }

    }

    
    function updateTaskChange(index){
        // when typing into text input, show that it changes
        setNewTask(event.target.value)
    }



    return(
        <>
        
        <div className='to-do-list'>
            <h1> TO DO LIST</h1>

            <div>
                <input className='input-task'
                type='text' 
                placeholder='Enter your task here' 
                value={newTask} 
                onChange={updateTaskChange}></input>

                <button
                className='add-button'
                onClick={addTask}>
                    Confirm
                </button>

            </div>

            <ol>
            
                {/* for every task do lim button etc */}
                {tasks.map((task,index)=>

                <li key ={index}> 

                    <span className='text'>{task}</span>



                    <button className='move-button'
                    onClick={()=>prioritiseTask(index)}>
                   ↑
                    </button>

                    <button className='move-button'
                    onClick={()=>unprioritiseTask(index)}>
                    ↓
                    </button>

                    <button className='delete-button'
                    onClick={()=>removeTask(index)}>
                    Delete
                    </button>

                </li>


                )}  {/* END OF TASK.MAP */}
            </ol>
        
      
        </div>
        
        
        
        </>
    );
}

export default ToDoList