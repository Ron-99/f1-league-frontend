import React, { useState } from 'react';

import LeftNav from './LeftNav';
import {StyledBurger} from './style'; 

const Burger = ({home}) => {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <StyledBurger home={home} open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <LeftNav home={home} open={open}/>
      </>
    )
};
  
export default Burger;