import React from 'react';
import IcoMoon from 'react-icomoon';
import iconSet from './selection.json';

import './icon.scss';

/* eslint-disable-next-line */
export interface IconProps {}

export const Icon = (props: any) => {
  return (
    <IcoMoon
      iconSet={iconSet}
      {...props}
      className={`icon ${props.className}`}
    />
  );
};

export default Icon;
