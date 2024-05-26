import React, { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ToDoForm from './components/ToDoForm'
import { api } from './api/ApiData'
import uuid from 'react-uuid'

const App = () => {

  const [task,setTask] = useState([]);

  const FetchApi = async () => {
    const toDoData = await api.get("todolist");
    setTask(toDoData.data)
  }

  useEffect(()=>{
    FetchApi()
  },[task])

  const clickAddTask = async (userTask) => {
    const dataToApi = {
      "id" : uuid() ,
      "task" : userTask ,
      "complete" : false
    }
    
    await api.post("todolist", dataToApi)
  }

  const deleteTask = async (task_id) => {
    await api.delete(`todolist/${task_id}`)
  }

  const CompleteTask = async (task_id,complete) => {
    await api.patch(`todolist/${task_id}`,{complete})
  }

  return (
    <div>
      <ToDoForm clickAddTask={clickAddTask}/>
      <ToDoList task={task} deleteTask={deleteTask} CompleteTask={CompleteTask}/>
    </div>
  )
}

export default App