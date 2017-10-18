import React from 'react';
import './App.css';
import Navigation from './navigation/Navigation';
import TaskList from './tasks/TaskList';

/**
 * Main component
 */
const App = () => (
  <div>
    <Navigation />
    <TaskList />
  </div>
);

export default App;
