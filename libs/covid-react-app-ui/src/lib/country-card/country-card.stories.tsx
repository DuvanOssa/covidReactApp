import React from 'react';
import { storiesOf } from '@storybook/react';

import CountryCard from './country-card';

storiesOf('CountryCard', module).add('Default', () => (
  <CountryCard
    countryCode="CO"
    countryName="Colombia"
    infectedAmount={200}
    recoveredAmount={100}
    deadAmount={100}
    onclick={() => {}}
  />
));
