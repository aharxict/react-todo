import React, { Component } from 'react';
import Wrap from '../../Wrap/Wrap';
import css from './Item.css';

class Item extends Component {
  render() {
    return (
      <Wrap>
        <div className={css.box}>Item</div>
      </Wrap>
    );
  }
}

export default Item;