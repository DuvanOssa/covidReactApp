import React from 'react';
import { render } from '@testing-library/react';

import CountryCard from './country-card';

describe(' CountryCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CountryCard />);
    expect(baseElement).toBeTruthy();
  });
});
