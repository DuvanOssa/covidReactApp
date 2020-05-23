import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';

import CountryCard from './country-card';

describe(' CountryCard', () => {
  const onClick = jest.fn();
  it('should render successfully', () => {
    const { baseElement } = render(
      <CountryCard
        countryCode="CO"
        countryName="Colombia"
        infectedAmount={200}
        recoveredAmount={100}
        deadAmount={100}
        onclick={onClick}
      />
    );
    expect(baseElement).toBeTruthy();
  });
  it('should be clickable', () => {
    const { baseElement } = render(
      <CountryCard
        countryCode="CO"
        countryName="Colombia"
        infectedAmount={200}
        recoveredAmount={100}
        deadAmount={100}
        onclick={onClick}
      />
    );
    const Card = getByTestId(baseElement, 'countryCard') as HTMLDivElement;
    ReactTestUtils.Simulate.click(Card);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
