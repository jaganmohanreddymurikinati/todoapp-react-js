import React,{useState,useEffect} from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import TodoList from "./components/TodoList"
import "./App.css"
const App = () => {
  const getInitialTodos = () => {
    try {
      const localData = localStorage.getItem("todos");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
      return [];
    }
  };

  const [input,setInput]=useState("")
  const [todos,setTodos]=useState(getInitialTodos())
  const [editTodo,setEditTodo]=useState(null)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]);

  console.log(localStorage.getItem("todos"))

  return (
    <div className="app-contianer">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}

          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  )
}

export default App