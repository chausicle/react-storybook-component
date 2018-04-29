import React from 'react';
import { storiesOf } from '@storybook/react';
import Timer from '../src/components/Timer.js';
import Expenses from '../src/components/Expenses';

storiesOf('Timer', module).add('Show', () => <Timer />);
storiesOf('Expenses', module).add('Show', () => <Expenses />);
