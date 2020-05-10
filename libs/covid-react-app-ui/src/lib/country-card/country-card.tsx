import React from 'react';

import './country-card.scss';
import { Card } from 'antd';
import ReactCountryFlag from 'react-country-flag';

import infected from '../../../../../apps/covid-react-app/src/assets/icons/bacteria.svg';
import recovered from '../../../../../apps/covid-react-app/src/assets/icons/people.svg';
import dead from '../../../../../apps/covid-react-app/src/assets/icons/grave.svg';
import numeral from 'numeral';

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
          <img src={infected} className="singleCardIcon"></img>
          <span className="singleCardActionsAmount">
            {numeral(infectedAmount).format('0a')}
          </span>
        </div>,
        <div className="singleCardActions">
          <img src={recovered} className="singleCardIcon"></img>
          <span className="singleCardActionsAmount">
            {numeral(recoveredAmount).format('0a')}
          </span>
        </div>,
        <div className="singleCardActions">
          <img src={dead} className="singleCardIcon"></img>
          <span className="singleCardActionsAmount">
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
