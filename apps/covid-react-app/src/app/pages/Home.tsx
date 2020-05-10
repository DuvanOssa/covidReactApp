import React, { Fragment, useState, useEffect } from 'react';
import WorldInfoSection from '../../../../../libs/covid-react-app-ui/src/lib/world-info-section/world-info-section';
import CountryCard from '../../../../../libs/covid-react-app-ui/src/lib/country-card/country-card';
import { Card } from 'antd';
import ReactCountryFlag from 'react-country-flag';
import Meta from 'antd/lib/card/Meta';
import infected from '../../assets/icons/bacteria.svg';
import recovered from '../../assets/icons/people.svg';
import dead from '../../assets/icons/grave.svg';
import HomeService from '../../services/api/HomeService';

const Home = ({ title }) => {
  const [globalDataState, setGlobalDataState] = useState(null);
  const [coutryDataList, setCoutryDataList] = useState(null);

  useEffect(() => {
    getSumary();
  }, []);

  const getSumary = () => {
    HomeService.getSummary().then(sumary => {
      setGlobalDataState(sumary.Global);
      setCoutryDataList(sumary.Countries);
    });
  };
  return (
    <Fragment>
      <div className="contentHeader">
        <h1 className="contentHeaderTitle">{title}</h1>
      </div>
      <hr />
      <div className="contentBody">
        {globalDataState && (
          <div className="worldInfo">
            <WorldInfoSection
              title="Infectados"
              icon={infected}
              amount={globalDataState.TotalConfirmed}
            />
            <WorldInfoSection
              title="Recuperados"
              icon={recovered}
              amount={globalDataState.TotalRecovered}
            />
            <WorldInfoSection
              title="Muertos"
              icon={dead}
              amount={globalDataState.TotalDeaths}
            />
          </div>
        )}

        <hr />
        {coutryDataList && (
          <div className="cardGroup">
            {coutryDataList.map((country, i) => (
              <CountryCard
                key={i}
                countryCode={country.CountryCode}
                countryName={country.Country}
                infectedAmount={country.TotalConfirmed}
                recoveredAmount={country.TotalRecovered}
                deadAmount={country.TotalDeaths}
              />
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
