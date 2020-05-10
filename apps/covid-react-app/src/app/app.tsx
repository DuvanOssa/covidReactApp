import React from 'react';
import '../styles.scss';
import { Layout, Card } from 'antd';
import NavHeader from './components/NavHeader';
import BodyContent from './components/BodyContent';

export const App = () => {
  return (
    <Layout>
      <NavHeader />
      <Layout className="layoutContent">
        <BodyContent />
      </Layout>
    </Layout>
  );
};

export default App;
