import React from 'react';

import './world-info-section.scss';
import numeral from 'numeral';

/* eslint-disable-next-line */
export interface WorldInfoSectionProps {
  icon: string;
  amount: number;
  title: string;
}

export const WorldInfoSection = ({
  icon,
  amount,
  title
}: WorldInfoSectionProps) => {
  return (
    <div className="worldInfoSection">
      <span className="worldInfoTitle">{title}</span>
      <div style={{ display: 'flex' }}>
        <img className="worldInfoIcon" src={icon}></img>
        <span className="worldInfoText">{numeral(amount).format('0,0')}</span>
      </div>
    </div>
  );
};

export default WorldInfoSection;
