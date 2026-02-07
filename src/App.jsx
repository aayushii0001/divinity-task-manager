import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [hide, setHide] = useState(true)

  useEffect(() => {
    let taskString = localStorage.getItem("tasks")
    if(taskString){
      let tasks = JSON.parse(localStorage.getItem("tasks"))
      setTasks(tasks)
    }
  }, [])
  

  const saveToLocalStorage = () => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }

  const toggleHide = () =>{
    setHide(!hide)
  }

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSave = () => {
    setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }]);
    setTask("");
    saveToLocalStorage()
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = tasks.findIndex((item) => {
      return item.id == id;
    });
    let newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
    saveToLocalStorage()
  };

  const handleEdit = (e,id) => {
    let t = tasks.filter(i=>i.id === id);
    setTask(t[0].task);
    let newTasks = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(newTasks);
    saveToLocalStorage()
  };

  const handleDelete = (e, id) => {
    let newTasks = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(newTasks);
    saveToLocalStorage()
  };

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-4 rounded-2xl bg-blue-100 p-5 min-h-[85vh] md:w-1/2">
      <h1 className="text-center font-bold text-3xl">Divinity - Manage all your tasks!</h1>
        <div className="addTask flex flex-col my-5">
          <h1 className="text-xl font-bold">Add a Task</h1>
          <input
            onChange={handleChange}
            value={task}
            className="bg-white w-full my-5 rounded-lg p-1"
            type="text"
          />
          <button
            onClick={handleSave} disabled={task.length<=3}
            className="bg-blue-700 disabled:bg-black hover:bg-blue-900 text-sm font-bold p-3 py-1 text-white rounded-md"
          >
            Save
          </button>
        </div>
        <input onChange={toggleHide} type="checkbox" checked={hide} name="" id="" /> Show Completed
        <h1 className="my-4 text-2xl font-bold">Your Tasks</h1>
        <div className="tasks">
          {tasks.length == 0 && <div className="m-5">No tasks added yet!</div>}
          {tasks.map((item) => {
            return (hide || !item.isCompleted) && (
              <div
                key={item.id}
                className="task flex w-full my-3 justify-between"
              >
                <div className="flex gap-5">
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                  />
                  <div className={`${item.isCompleted ? "line-through" : ""} break-all `}>
                    {item.task}
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button
                    onClick={(e) =>{handleEdit(e,item.id)}}
                    className="bg-blue-700 hover:bg-blue-900 text-sm font-bold p-3 py-1 text-white rounded-md mx-1"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="bg-blue-700 hover:bg-blue-900 text-sm font-bold p-3 py-1 text-white rounded-md mx-1"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
