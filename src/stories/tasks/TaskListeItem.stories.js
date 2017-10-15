import React from 'react';
import { storiesOf } from '@storybook/react';
import TaskListItem from '../../tasks/TaskListItem';

const task = {
  id: 1,
  priority: 1,
  title: 'title 1',
  content: 'TASK CONTENT',
  timeCreated: '2017-10-15 19:09:15.573863574',
};

storiesOf('TaskListItem', module).add('Default', () => <TaskListItem task={task} />);
