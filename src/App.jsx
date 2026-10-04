import { useState, useEffect } from 'react'
import Navbar from './components/navbar.jsx'
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function App() {
   const [todos, setTodos] = useState([])
   const [todo, setTodo] = useState('')
  const [showFinished, setShowFinished] = useState(true)


     useEffect(() => {
      let todoString = localStorage.getItem("todos")
      if(todoString){
       
      
       let todos = JSON.parse(localStorage.getItem("todos"))
       
         setTodos(todos)
       }
     }, [])
     
     


   const saveToLS = () => {
     localStorage.setItem('todos', JSON.stringify(todos))
   }
   
  const toggleFinished = () => {
    setShowFinished(!showFinished)
  }


   const handleEdit = (e, id) => {
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
     let newTodos = todos.filter(item=> {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }
  const handleDelete = (e, id) => {
  
    
    
     let newTodos = todos.filter(item=> {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  
  const handleAdd = () => {
   setTodos([...todos,  {id: uuidv4(), todo, isCompleted: false }])
   setTodo('')
   saveToLS()
  }
  const handleChange = (e) => {
   setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    
     let id = e.target.name
     let index = todos.findIndex(item => {
      return item.id === id;
     })
     
     let newTodos = [...todos];

     newTodos[index].isCompleted = !newTodos[index].isCompleted;
     setTodos(newTodos)
     saveToLS()
     
   }
   
  return (
    <>
    <Navbar/>
    <div className=" mx-3 md:container md:mx-auto md:w-1/2 bg-zinc-100 text-slate-800 p-2 my-4   rounded-xl  min-h-[80vh] border-slate-800 border-2">
    
    <h1 className="text-2xl font-bold text-center my-4">iTask - Manage Your Todos At One Place</h1>
     <div className="addtodo flex flex-col gap-4">
      <h1 className="text-xl font-bold">Add a Todo</h1>
     
     <input onChange={handleChange} value={todo} className=" w-full p-2  bg-white-700 text-slate-800 placeholder:text-slate-400 border rounded-2xl border-slate-700 focus:ring-slate-800" type="text"  placeholder="Enter a new todo..." />
     <button onClick={handleAdd} disabled={todo.length<=3} className=  "  w-full bg-slate-800  hover:bg-slate-900 transition-all disabled:bg-slate-800 text-slate-100 font-bold py-2 px-4 rounded-3xl ">
      Save 
     </button>
     </div>
     <label className="flex items-center cursor-pointer">
       <input onChange={toggleFinished} type="checkbox" checked={showFinished}   />
       <span className="m-4">Show Finished Todos</span>
     </label>
     <h2 className="text-lg font-bold ">
      Your Todos
     </h2>
     <div className="todos">
      {todos.length === 0 && <div className="text-slate-400  my-40 flex justify-center">No todos yet</div>}
      {todos.map(item=>{
        
     return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between items-center p-1 ">
        <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          <div className="button flex h-full">
            <button onClick={(e)=>{handleEdit(e, item.id)}} className="bg-slate-800 hover:bg-slate-900 hover:scale-110 transition-all text-slate-100 font-bold py-2 px-4 rounded-3xl mx-1 my-0   "><FaEdit /></button>
            <button onClick={(e)=>{handleDelete(e, item.id)}} className="bg-slate-800 hover:bg-slate-900 hover:scale-110 transition-all text-slate-100 font-bold py-2 px-4 rounded-3xl mx-1 my-0   "><MdDelete /></button>
          </div>
        

     </div>
    })}
     </div>
    </div>
    </>
  )
}

export default App
