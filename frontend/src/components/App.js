/* eslint-disable import/no-named-as-default */
import {  BrowserRouter as Router , NavLink, Route, Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb  } from 'antd';
const { Header, Content, Footer } = Layout;

import Feed from "./feed/Query";
import About from "./About";
import ThingQuery from './thing/Query';
import NotFound from "./NotFound";
import React from "react";
import { hot } from "react-hot-loader";
import Apollo from './Apollo';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <Apollo>
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><NavLink exact to="/" activeStyle={activeStyle}>List of Things</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Switch>
                <Route exact path="/" component={Feed} />
                <Route path="/about" component={About} />
                <Route path="/:id" component={ThingQuery} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Kuee Ltd ©2018 Created by Leigh Ciechanowski
          </Footer>
        </Layout>
      </Router>
      </Apollo>
    );
  }
}

export default hot(module)(App);
