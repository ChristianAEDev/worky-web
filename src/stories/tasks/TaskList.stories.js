import React from 'react';
import { storiesOf } from '@storybook/react';
import TaskList from '../../tasks/TaskList';

const tasks = [
  {
    id: 1,
    priority: 1,
    title: 'title 1',
    content: 'TASK CONTENT',
    timeCreated: '2017-10-15 19:09:15.573863574',
  },
  {
    id: 2,
    priority: 2,
    title: 'title 2',
    content: 'TASK CONTENT',
    timeCreated: '2017-10-15 19:09:15.573863574',
  },
];

storiesOf('TaskList', module).add('Default', () => <TaskList tasks={tasks} />);
