import React from 'react';
import { Layout, Card } from 'antd';
import routes from '../../routes';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from '../pages/Home';

const { Content } = Layout;

const BodyContent = () => {
  return (
    <Content className="content">
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            render={props => <route.component {...props} title={route.title} />}
          />
        ))}
        <Redirect from="/" to="/home" />
      </Switch>
    </Content>
  );
};

export default BodyContent;
