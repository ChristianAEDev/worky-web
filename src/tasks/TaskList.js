import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import List from 'material-ui/List';
import TaskListItem from './TaskListItem';
import { getTasks } from './TaskActions';

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
        <SortableItem key={task.id} index={task.id} task={task} />
      ))}
    </List>
  </div>
));

/**
 * Displays a (sortable) list of tasks.
 */
class TaskList extends Component {
  /**
   * React life cycle method.
   */
  componentDidMount() {
    this.props.getTasks();
  }

  /**
  * Is called when the drag and drop process is finished
  * @param {*} param0
  */
  onSortEnd = ({ oldIndex, newIndex }) => {
    console.info('Update priority of task from', 'oldIndex:', oldIndex, 'newIndex:', newIndex);
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
  getTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

/**
 * Function necessary for react-redux to have the props from the state available in the component.
 * @param {*} state
 */
function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps, { getTasks })(TaskList);
