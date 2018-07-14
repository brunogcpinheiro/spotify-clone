import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/13948019?v=4" alt="Avatar" />
      Bruno Carpinelli
    </User>
  </Container>
);

export default Header;
