import React, { Component } from 'react';
import Wrap from '../Wrap/Wrap';
import css from './Header.css';

class Header extends Component {
  render() {
    return (
      <Wrap>
        <header className={css.header}>
          Header works!
        </header>
      </Wrap>
    );
  }
}

export default Header;