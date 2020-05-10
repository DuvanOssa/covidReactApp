import React from 'react';
import { render } from '@testing-library/react';

import WorldInfoSection from './world-info-section';

describe(' WorldInfoSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorldInfoSection />);
    expect(baseElement).toBeTruthy();
  });
});
