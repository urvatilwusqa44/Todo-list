import React, { useState } from "react";
import styles from './Todo.module.css';
import Item from "./Item";


const Todo=()=>{
    //task list
    const [list,setlist]=useState([
        {
         id: 1,
         name:"Learn React",
         status:"pending"
        },
        {
            id: 2,
            name:"Learn Java",
            status:"completed"
        },
        {
            id: 3,
            name:"Learn Python",
            status:"completed"
        }
    ]);
    //input text
    const [input,setinput]=useState("");
    //event listner
    const handleInputChange=(e)=>{
    setinput(e.target.value);
    };
    const addTaskHandler=(e)=>{
        e.preventDefault();
        const task={
            id:Math.random(Math.floor()*23456),
            name:input,
            status:"pending"
        }
        const prevTasks=list;
        setlist([...prevTasks,task]);
    };
    const clearAllhandler=()=>{
        setlist([]);
    };
    const MarkDonehandler=(id)=>{
    const updatedlist=list.map((element)=>{
        if(element.id===id) element.status="completed";
        return element;
    });
    setlist(updatedlist);
    }
    const MarkDeletehandler=(id)=>{
        const updatedlist=list.filter((element)=>{
            return element.id!==id;
        });
        setlist(updatedlist);
    }
    return (<div className={styles.maincontainer}>
    <div className={styles.box}>
     <h1>Make your To-do List</h1>
     <div><p>Add your items here ✏️</p>
     <form>
            <input type="text" placeholder="Your item" value={input} onChange={handleInputChange}/>
            <button onClick={addTaskHandler}>Submit</button>
        </form>
     </div>
     </div>
     <h3>Your tasks</h3>
     <ul>

        {list.map((element)=>( 
        <Item task={element} onDone={MarkDonehandler} onDelete={MarkDeletehandler}/>))}
    
    </ul>
    {list.length !==0 &&(
    <div>
        <button className={styles.clearall} onClick={clearAllhandler}>Clear All</button>
    </div>
    )};
    </div>
    );
}
export default Todo;