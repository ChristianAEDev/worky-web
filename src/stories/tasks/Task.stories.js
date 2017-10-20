import React from 'react';
import { storiesOf } from '@storybook/react';
import Task from '../../tasks/Task';

const task = {
  id: 1,
  title: 'title 1',
  content: 'TASK CONTENT',
  timeCreated: '2017-10-15 19:09:15.573863574',
  udpates: [
    {
      id: 1,
      timestamp: '2017-10-17 09:09:15.573863574',
      type: 'PHONE_CALL',
      description: 'Talked about the current issues in production.',
    },
    {
      id: 2,
      timestamp: '2017-10-17 09:09:15.573863574',
      type: 'FILE',
      description: 'Description of the task cases',
    },
    {
      id: 2,
      timestamp: '2017-10-17 09:09:15.573863574',
      type: 'MAIL',
      description: 'Request to add a feature.',
    },
  ],
};

storiesOf('Task', module).add('Default', () => <Task task={task} />);
