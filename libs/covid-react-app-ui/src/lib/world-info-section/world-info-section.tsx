import React from 'react';

import './world-info-section.scss';

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
        <span className="worldInfoText">{amount}</span>
      </div>
    </div>
  );
};

export default WorldInfoSection;
