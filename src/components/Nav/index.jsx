import React from 'react';
import Burger from './Burger';

import {Nav} from './style';

const Navbar = ({home}) => {
  return (
    <Nav>
      <Burger home={home}/>
    </Nav>
  )
}

export default Navbar