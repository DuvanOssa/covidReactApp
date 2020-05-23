import React from 'react';
import { render } from '@testing-library/react';

import infected from '../../../../../apps/covid-react-app/src/assets/icons/bacteria.svg';

import WorldInfoSection from './world-info-section';

describe(' WorldInfoSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorldInfoSection title="Infectados" icon={infected} amount={30000} />
    );
    expect(baseElement).toBeTruthy();
  });
});
