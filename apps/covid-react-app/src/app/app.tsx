import React from 'react';
import '../styles.scss';
import { Layout, Menu, Input, Card } from 'antd';
import logo from '../assets/img/logo.png';
import infected from '../assets/icons/bacteria.svg';
import recovered from '../assets/icons/people.svg';
import dead from '../assets/icons/grave.svg';
import ReactCountryFlag from 'react-country-flag';

const { Search } = Input;

const { Header, Content } = Layout;
const { Meta } = Card;

export const App = () => {
  return (
    <Layout>
      <Header>
        <div className="logo">
          <img src={logo} className="logoImage"></img>
          <span className="logoTitle">CovidReactApp</span>
        </div>
        <div className="divSearch">
          <Search placeholder="Buscar..." enterButton></Search>
        </div>
      </Header>
      <Layout className="layoutContent">
        <Content className="content">
          <div className="contentHeader">
            <h1 className="contentHeaderTitle">INFORMACIÓN GENERAL</h1>
          </div>
          <hr />
          <div className="contentBody">
            <div className="worldInfo">
              <div className="worldInfoSection">
                <span className="worldInfoTitle">Infectados</span>
                <div style={{ display: 'flex' }}>
                  <img className="worldInfoIcon" src={infected}></img>
                  <span className="worldInfoText">170000</span>
                </div>
              </div>
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
              <Card
                className="singleCard"
                cover={
                  <ReactCountryFlag
                    countryCode="CO"
                    svg
                    style={{
                      width: '100%',
                      height: '120px',
                      objectFit: 'cover'
                    }}
                    title="CO"
                  />
                }
                actions={[
                  <div className="singleCardActions">
                    <img src={infected} className="singleCardIcon"></img>
                    <span className="singleCardActionsAmount">10.4k</span>
                  </div>,
                  <div className="singleCardActions">
                    <img src={recovered} className="singleCardIcon"></img>
                    <span className="singleCardActionsAmount">2.56k</span>
                  </div>,
                  <div className="singleCardActions">
                    <img src={dead} className="singleCardIcon"></img>
                    <span className="singleCardActionsAmount">445</span>
                  </div>
                ]}
              >
                <Meta title="Colombia"></Meta>
              </Card>
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
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
