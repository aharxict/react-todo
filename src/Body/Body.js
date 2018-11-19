import React, { Component } from 'react';
import css from './Body.css';
import Wrap from '../Wrap/Wrap';
import Item from './Item/Item';
import Add from './Add/Add';

class Body extends Component {
  state = {
    tasks: [
      { id: 1, name: 'Test task', can_delete: true},
      { id: 2, name: 'Second task', can_delete: true}
    ]
  };
  addNewTask() {

  }
  render() {

    let tasks = null;
    tasks = (
      <Wrap>

        {this.state.tasks.map( (task, index) => {
         return <div className={css.row} key = {task.id} >
           <Item
           delete = { (event) => this.taskDelete(event, task.id) }
           task_id = {task.id}
           task_name = {task.name}
           can_delete = {task.can_delete}
         />
         </div>;
        })}
      </Wrap>

    );

    return (
      <Wrap>
        <div className={css.container}>
          <h3>Simple Todo list</h3>
          <Add click={this.addNewTask}/>
          <div className={css.row}>
            <Item task_id = "ID" task_name="Task description" can_delete={false} />
          </div>
          {tasks}
        </div>
      </Wrap>
    );
  }
}

export default Body;