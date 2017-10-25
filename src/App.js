import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './navigation/Navigation';
import TaskList from './tasks/TaskList';
import Task from './tasks/Task';

const routes = [
  {
    index: 0,
    path: '/',
    exact: true,
    navigation: props => <Navigation {...props} />,
    content: () => <TaskList />,
  },
  {
    index: 1,
    path: '/tasks/:taskID',
    exact: true,
    navigation: props => <Navigation {...props} />,
    content: props => <Task {...props} />,
  },
];

/**
 * Main component
 */
const App = () => (
  <div>
    {/* Render navigation */}
    {routes.map(route => (
      <Route key={route.index} path={route.path} exact={route.exact} component={route.navigation} />
    ))}
    {/* Render the content for that route */}
    <Switch>
      {routes.map(route => (
        <Route
          key={route.index}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          component={route.content}
        />
      ))}
    </Switch>
  </div>
);

export default App;
