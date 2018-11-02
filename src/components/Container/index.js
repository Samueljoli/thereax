import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import styled from 'styled-components';
import history from '../../helpers/history';
import media from '../../helpers/media';

const { Header, Content } = Layout;
const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  ${media.sm`
    position: absolute;
    top: 0;
    left: 30px;
  `}
`;

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKeys: this.resolveDefaultKey(),
    };
  }

  resolveDefaultKey = () => {
    const { pathname } = this.props.history.location;

    if (pathname === '/') {
      return ['home'];
    }
    else if (pathname === '/signup') {
      return ['signup']
    }

  };

  render() {
    return (
      <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0, textAlign: 'right' }}>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={this.state.selectedKeys}
          style={{ lineHeight: '64px' }}
        >
          <LogoContainer>
            <h1> R | E | A | X </h1>
          </LogoContainer>
          <Menu.Item
            key="home"
            onClick={() => {
              history.push('/');

              this.setState({
                selectedKeys: ['home'],
              });
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="signup"
            onClick={() => {
              history.push('/signup');

              this.setState({
                selectedKeys: ['signup'],
              });
            }}
          >
            Sign Up
          </Menu.Item>
        </Menu>
      </Header>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
};

export default Container;

