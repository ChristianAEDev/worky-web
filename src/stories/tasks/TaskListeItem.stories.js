import React from 'react';
import { storiesOf } from '@storybook/react';
import TaskListItem from '../../tasks/TaskListItem';

const task = {
  id: 1,
  priority: 1,
  title: 'title 1',
  content:
    '# Headline\n\nContent of a task.\n\n* Follows the [CommonMark](http://commonmark.org/) spec\n* Render a string as markdown',
  timeCreated: '2017-10-15 19:09:15.573863574',
};

storiesOf('TaskListItem', module).add('Default', () => <TaskListItem task={task} />);
