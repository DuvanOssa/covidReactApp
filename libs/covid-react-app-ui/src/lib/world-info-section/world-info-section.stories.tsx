import React from 'react';
import { storiesOf } from '@storybook/react';
import WorldInfoSection from './world-info-section';
import infected from '../../../../../apps/covid-react-app/src/assets/icons/bacteria.svg';

storiesOf('WorldInfoSection', module).add('Default', () => (
  <WorldInfoSection title="Infectados" icon={infected} amount={30000} />
));
