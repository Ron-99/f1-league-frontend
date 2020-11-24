import React from 'react';
import Burger from './Burger';

import {Nav} from './style';

const Navbar = ({home, theme, themeToggler}) => {
  return (
    <Nav>
      <Burger home={home} theme={theme} themeToggler={themeToggler}/>
    </Nav>
  )
}

export default Navbar