import React, { Component } from 'react';
import Wrap from '../../Wrap/Wrap';
import css from './Item.css';

class Item extends Component {

  render() {

    let deleteBox = null;

    if (this.props.can_delete) {
      deleteBox = (
        <span>Remove</span>
      );
    }

    return (
      <Wrap>
        <div className={css.box}>{this.props.task_id}</div>
        <div className={css.box}>{this.props.task_name}</div>
        <div className={css.box}>{deleteBox}</div>
      </Wrap>
    );
  }
}

export default Item;