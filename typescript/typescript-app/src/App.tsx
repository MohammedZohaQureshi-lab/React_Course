import React from 'react';
import './App.css';
import ToDos from './components/ToDos';
import ToDo from './models/todo';
import Lists from './components/Lists';

function App() {
  const todos = [
    new ToDo('Learn React'),
    new ToDo('Learn Type Script'),
    new ToDo('Learn Java Script'),
  ]
  return (
    <div>
      <h1>React Typescript</h1>
      <ToDos items={todos} />
    </div>
  );
}

export default App;
