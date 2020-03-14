import React from 'react';
import './App.css';
import ToDoList from './containers/ToDoList'
import AddTodo from './containers/AddTodo'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Lista de tarefas</h1>
        <AddTodo />
        <ToDoList />
      </Provider>
    </div>
  );
}

export default App;
