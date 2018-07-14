import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/global';

import Sidebar from './components/sidebar';
import Header from './components/header';
import Player from './components/player';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default App;
