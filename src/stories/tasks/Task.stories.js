import React from 'react';
import { storiesOf } from '@storybook/react';
import Task from '../../tasks/Task';

const task = {
  id: 1,
  title: 'title 1',
  content:
    '# Headline\n\nContent of a task.\n\n* Follows the [CommonMark](http://commonmark.org/) spec\n* Render a string as markdown',
  timeCreated: '2017-10-15 19:09:15.573863574',
  updates: [
    {
      id: 1,
      timestamp: '2017-10-17 09:09:15.573863574',
      type: 'PHONE_CALL',
      title: 'Call from Peter',
      description: 'Talked about the current issues in production.',
    },
    {
      id: 2,
      timestamp: '2017-10-18 09:09:15.573863574',
      type: 'FILE',
      title: '',
      description: 'Description of the test cases',
    },
    {
      id: 2,
      timestamp: '2017-10-21 05:09:15.573863574',
      type: 'MAIL',
      title: 'Mail from Mark',
      description: 'Request to add a feature.',
    },
  ],
};

storiesOf('Task', module).add('Default', () => <Task task={task} />);
