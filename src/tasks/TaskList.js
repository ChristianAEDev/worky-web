import React, { Component } from 'react';
import _ from 'lodash';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import List from 'material-ui/List';
import TaskListItem from './TaskListItem';

/**
 * Displays as (sortable) list of tasks.
 */
class TaskList extends Component {
  /**
  * Is called when the drag and drop process is finished
  * @param {*} param0
  */
  onSortEnd = ({ oldIndex, newIndex }) => {
    console.info('Update priority of task from', 'oldIndex:', oldIndex, 'newIndex:', newIndex);
    // this.props.updatePriority(oldIndex, newIndex);
  };

  /**
   * Render method.
   */
  render() {
    const tasks = [
      {
        id: 1,
        priority: 1,
        title: 'title 1',
      },
      {
        id: 2,
        priority: 2,
        title: 'title 2',
      },
      {
        id: 3,
        priority: 3,
        title: 'title 3',
      },
      {
        id: 4,
        priority: 4,
        title: 'title 4',
      },
      {
        id: 5,
        priority: 5,
        title: 'title 5',
      },
      {
        id: 6,
        priority: 6,
        title: 'title 6',
      },
    ];

    return <SortableList tasks={tasks} useDragHandle onSortEnd={this.onSortEnd} />;
  }
}

/**
 * HOC provided by react-sortable-hoc to create a sortable list item
 */
const SortableItem = SortableElement(({ task }) => <TaskListItem>{task.title}</TaskListItem>);

/**
 * * HOC provided by react-sortable-hoc to create a sortable list
 */
const SortableList = SortableContainer(({ tasks }) => (
  <div>
    <List>
      {_.sortBy(tasks, ['priority']).map(task => (
        <SortableItem key={task.id} index={task.priority} task={task} />
      ))}
    </List>
  </div>
));

export default TaskList;
