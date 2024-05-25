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
  },[])

  const clickAddTask = async (userTask) => {
    const dataToApi = {
      "id" : uuid() ,
      "task" : userTask ,
      "complete" : false
    }

    const res = await api.post("todolist", dataToApi)

    console.log(res.data)

  }

  return (
    <div>
      <ToDoForm clickAddTask={clickAddTask}/>
      <ToDoList task={task}/>
    </div>
  )
}

export default App