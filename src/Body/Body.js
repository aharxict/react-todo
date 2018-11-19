import React, { Component } from 'react';
import css from './Body.css';
import Wrap from '../Wrap/Wrap';
import Item from './Item/Item';

class Body extends Component {
  state = {
    tasks: [
      { id: 1, name: 'Test task'}
    ]
  };
  render() {
    return (
      <Wrap>
        <div className={css.container}>
          <h3>Simple Todo list</h3>
          <div className={css.row}>
            <Item />
          </div>
        </div>
      </Wrap>
    );
  }
}

export default Body;