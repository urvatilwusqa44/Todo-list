import React from "react";
import styles from "./Item.module.css";
import { FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";
const Item=({task,onDone,onDelete})=>{
    return <li className={styles.item}>
       {task.status==="pending"? <p>{task.name}</p>: <del>{task.name}</del>}
        <div>
        <button className={styles.done} onClick={()=>{
            onDone(task.id);
        }}>
        <MdDone style={{color: "green"}}/>
        </button>
        <button className={styles.delete} onClick={()=>{
            onDelete(task.id);
        }}>
        <FaTrash style={{color: "red"}}/>
           
        </button>
        </div>
    </li>
};
export default Item;