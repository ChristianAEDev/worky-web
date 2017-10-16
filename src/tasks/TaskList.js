import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import List from 'material-ui/List';
import TaskListItem from './TaskListItem';

/**
 * HOC provided by react-sortable-hoc to create a sortable list item
 */
const SortableItem = SortableElement(({ task }) => <TaskListItem task={task} />);

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

/**
 * Displays a (sortable) list of tasks.
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
    const { tasks } = this.props;

    return <SortableList tasks={tasks} useDragHandle onSortEnd={this.onSortEnd} />;
  }
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
};

export default TaskList;
