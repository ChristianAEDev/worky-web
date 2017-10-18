import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FloatingActionButton from '../../utils/FloatingActionButton';

storiesOf('FloatingActionButton', module).add('Default', () => (
  <FloatingActionButton onClick={action('clicked')} />
));
