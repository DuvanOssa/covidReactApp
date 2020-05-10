import React from 'react';
import { Layout, Input } from 'antd';
import logo from '../../assets/img/logo.png';
const { Header } = Layout;
const { Search } = Input;

const NavHeader = () => {
  return (
    <Header>
      <div className="logo">
        <img src={logo} className="logoImage"></img>
        <span className="logoTitle">CovidReactApp</span>
      </div>
      <div className="divSearch">
        <Search placeholder="Buscar..." enterButton></Search>
      </div>
    </Header>
  );
};

export default NavHeader;
