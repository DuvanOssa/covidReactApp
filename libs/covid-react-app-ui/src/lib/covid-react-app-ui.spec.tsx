import React from 'react';
import { render } from '@testing-library/react';

import CovidReactAppUi from './covid-react-app-ui';

describe(' CovidReactAppUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CovidReactAppUi />);
    expect(baseElement).toBeTruthy();
  });
});
