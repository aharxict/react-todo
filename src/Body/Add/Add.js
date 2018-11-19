import React, { Component } from 'react';
import Wrap from '../../Wrap/Wrap';
import css from './Add.css';

class Add extends Component {
  render() {

    return (
      <Wrap>
        <div className={css["new-task"]}>
          <input type="text"/>
          <button>Add new task</button>
        </div>
      </Wrap>
    );
  }
}

export default Add;