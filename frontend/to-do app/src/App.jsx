import { useEffect, useState } from 'react';
import './App.css'
import Todo from './components/Todo'
import { MdAddCircleOutline } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from './utils/HandleApi';

function App() {
  const [todo, setTodo] = useState([])
  const [text, setText] = useState('')
  const [isUpdate, setIsUpdate] = useState(false)
  const [todoId, setTodoId] = useState('')

  useEffect(() => {
    getAllTodo(setTodo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdate(true)
    setText(text)
    setTodoId(_id)
  }

  const deleteMode = (_id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTimeout(() => { deleteTodo(_id, setTodo) }, 2000)
      console.log('Deleting...');
    }
  }

  return (
    <>
      <div className='container text-center'>
        <div className='flex justify-center items-center gap-2 text-3xl font-bold'>
          <RiTodoLine />
          <h1>Todo List</h1>
        </div>
        <div>
          <input type="text" placeholder='Enter todo....'
            className='my-4 mr-5 border-b-2 p-1 w-[400px] focus:outline-none'
            onChange={(e) => setText(e.target.value)}
            value={isUpdate ? text : ''}
          />
          <button className=' bg-gray-600 text-amber-50 rounded-sm px-4 py-1 cursor-pointer hover:bg-gray-950 duration-200'
            onClick={isUpdate ? () => updateTodo(todoId, text, setText, setTodo, setIsUpdate) : () => addTodo(text, setText, setTodo)}
          >
            <div className='flex items-center gap-1'>
              {isUpdate ? <LiaEdit /> : <MdAddCircleOutline />}
              {isUpdate ? "Update" : "Add"}
            </div>
          </button>
        </div>
        <div className='flex flex-col items-center gap-3.5'>
          {
            todo.map((item, index) => <Todo key={index} text={item.text} updateMode={() => updateMode(item._id, item.text)} deleteMode={() => deleteMode(item._id)} />)
          }
        </div>
      </div>
    </>
  )

}

export default App