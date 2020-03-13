import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'

const ToDoList = () => {
  const [todoItem, setTodoItem] = useState('')
  const dispatch = useDispatch()

  return(
    <div>
      <input type="text" onChange={({ target: { value } }) => setTodoItem(value)}/>
      <button onClick={() => dispatch(addTodo(todoItem))}>add todo</button>
    </div>

  )
}

export default ToDoList