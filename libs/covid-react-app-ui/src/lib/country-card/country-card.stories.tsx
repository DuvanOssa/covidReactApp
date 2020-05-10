import React from 'react';
import { storiesOf } from '@storybook/react';

import CountryCard from './country-card';

storiesOf('CountryCard', module).add('Default', () => <CountryCard />);
