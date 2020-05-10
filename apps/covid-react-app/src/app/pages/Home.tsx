import React, { Fragment } from 'react';
import WorldInfoSection from '../../../../../libs/covid-react-app-ui/src/lib/world-info-section/world-info-section';
import CountryCard from '../../../../../libs/covid-react-app-ui/src/lib/country-card/country-card';
import { Card } from 'antd';
import ReactCountryFlag from 'react-country-flag';
import Meta from 'antd/lib/card/Meta';
import infected from '../../assets/icons/bacteria.svg';
import recovered from '../../assets/icons/people.svg';
import dead from '../../assets/icons/grave.svg';

const Home = ({ title }) => {
  return (
    <Fragment>
      <div className="contentHeader">
        <h1 className="contentHeaderTitle">{title}</h1>
      </div>
      <hr />
      <div className="contentBody">
        <div className="worldInfo">
          <WorldInfoSection
            title="Infectados"
            icon={infected}
            amount={1700000}
          />
          <div className="worldInfoSection">
            <span className="worldInfoTitle">Recuperados</span>
            <div style={{ display: 'flex' }}>
              <img className="worldInfoIcon" src={recovered}></img>
              <span className="worldInfoText">170000</span>
            </div>
          </div>
          <div className="worldInfoSection">
            <span className="worldInfoTitle">Muertos</span>
            <div style={{ display: 'flex' }}>
              <img className="worldInfoIcon" src={dead}></img>
              <span className="worldInfoText">170000</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="cardGroup">
          <CountryCard
            countryCode="CO"
            infectedAmount={200}
            recoveredAmount={100}
            deadAmount={100}
          />
          <Card
            className="singleCard"
            cover={
              <ReactCountryFlag
                countryCode="CL"
                svg
                style={{
                  width: '100%',
                  height: '120px',
                  objectFit: 'cover'
                }}
                title="CL"
              />
            }
            actions={[
              <img src={infected} className="singleCardIcon"></img>,
              <img src={recovered} className="singleCardIcon"></img>,
              <img src={dead} className="singleCardIcon"></img>
            ]}
          >
            <Meta title="Chile"></Meta>
          </Card>
          <Card
            className="singleCard"
            cover={
              <ReactCountryFlag
                countryCode="CU"
                svg
                style={{
                  width: '100%',
                  height: '120px',
                  objectFit: 'cover'
                }}
                title="CU"
              />
            }
            actions={[
              <img src={infected} className="singleCardIcon"></img>,
              <img src={recovered} className="singleCardIcon"></img>,
              <img src={dead} className="singleCardIcon"></img>
            ]}
          >
            <Meta title="Cuba"></Meta>
          </Card>
          <Card
            className="singleCard"
            cover={
              <ReactCountryFlag
                countryCode="CN"
                svg
                style={{
                  width: '100%',
                  height: '120px',
                  objectFit: 'cover'
                }}
                title="CN"
              />
            }
            actions={[
              <img src={infected} className="singleCardIcon"></img>,
              <img src={recovered} className="singleCardIcon"></img>,
              <img src={dead} className="singleCardIcon"></img>
            ]}
          >
            <Meta title="China"></Meta>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
