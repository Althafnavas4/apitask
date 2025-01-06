import { useEffect, useState } from "react"
import axios from 'axios'


function TaskList(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/task/").then(res=>{
            console.log(res.data);
            setData(res.data)
        }).catch(error=>console.log(error.message))
    },[])
    return(
        <>
        <div className="container">
            
        <table className="table">
            <thead>
            <tr>
                <th>Task</th>
                <th>Dis</th>
            </tr>
            </thead>
            <tbody>
            {data.map((value,index)=>(
                <tr key={index}>
                <td>{value.title}</td>
                <td>{value.dis}</td>
                <td><button onClick={()=>{}}className="btn btn-outline-primary">Edit</button></td>
                <td><button onClick={()=>{}}className="btn btn-outline-danger">Delete</button></td>                
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        </>
    )
}
export default TaskList