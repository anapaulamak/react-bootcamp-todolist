import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'
import './styles.css'

const ToDoList = () => {
  const [todoItem, setTodoItem] = useState('')
  const dispatch = useDispatch()
  const addNewItem = () => dispatch(addTodo(todoItem))

  return(
    <div className="inputArea">
      <input
       type="text"
       onChange={({ target: { value } }) => setTodoItem(value)}
      />
      <button onClick={addNewItem}>Adicionar tarefa</button>
    </div>
  )
}

export default ToDoList