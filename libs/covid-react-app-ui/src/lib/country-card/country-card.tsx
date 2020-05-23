import React from 'react';

import './country-card.scss';
import { Card } from 'antd';
import ReactCountryFlag from 'react-country-flag';
import numeral from 'numeral';
import Icon from '../icon/icon';

const { Meta } = Card;

/* eslint-disable-next-line */
export interface CountryCardProps {
  countryCode: string;
  countryName: string;
  infectedAmount: number;
  recoveredAmount: number;
  deadAmount: number;
  onclick(): any;
}

export const CountryCard = ({
  countryCode,
  countryName,
  infectedAmount,
  recoveredAmount,
  deadAmount,
  onclick
}: CountryCardProps) => {
  return (
    <Card
      id="countryCard"
      data-testid="countryCard"
      className="singleCard"
      onClick={onclick}
      cover={
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{
            width: '200px',
            height: '120px',
            objectFit: 'cover'
          }}
          title={countryCode}
        />
      }
      actions={[
        <div className="singleCardActions">
          <Icon icon="infected-icon" size="20" className="singleCardIcon" />
          <span className="singleCardActionsAmount" data-testid="infectedInfo">
            {numeral(infectedAmount).format('0a')}
          </span>
        </div>,
        <div className="singleCardActions">
          <Icon icon="recovered-icon" size="20" className="singleCardIcon" />
          <span className="singleCardActionsAmount" data-testid="recoveredInfo">
            {numeral(recoveredAmount).format('0a')}
          </span>
        </div>,
        <div className="singleCardActions">
          <Icon
            icon="dead-icon"
            size="20"
            className="singleCardIcon"
            style={{ strokeWidth: '1px' }}
          />
          <span className="singleCardActionsAmount" data-testid="deadInfo">
            {numeral(deadAmount).format('0a')}
          </span>
        </div>
      ]}
    >
      <Meta title={countryName}></Meta>
    </Card>
  );
};

export default CountryCard;
