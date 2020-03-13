import React from 'react';
import './App.css';
import ToDoList from './containers/ToDoList'
import AddTodo from './containers/AddTodo'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <h1>To do List</h1>
      <AddTodo />
      <ToDoList />
    </Provider>
  );
}

export default App;
