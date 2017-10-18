import React from 'react';
import { storiesOf } from '@storybook/react';
import Editor from '../../utils/Editor';

const value = '# Test';

storiesOf('Editor', module).add('Default', () => <Editor value={value} />);
