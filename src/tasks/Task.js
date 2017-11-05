import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { CircularProgress } from 'material-ui/Progress';
import ReactMarkdown from 'react-markdown';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { DATE_TIME_FORMAT } from '../utils/Defines';
import TaskUpdates from './TaskUpdates';
import { getTask } from './TaskActions';

/**
 * Component to display/edit task.
 */
class Task extends Component {
  /**
   * Life cycle method loading the task to display on this page.
   */
  componentDidMount() {
    // Read the ID of the task which is part of the URL. For this to work the props need to be
    // when setting up routing using "react-router-dom".
    const { taskID } = this.props.match.params; // eslint-disable-line
    // Load the task
    this.props.getTask(taskID);
  }

  /**
   * Render method.
   */
  render() {
    const { task } = this.props;

    if (task === null) {
      return <CircularProgress />;
    }

    return (
      <div>
        <Grid container style={{ flexGrow: '1' }}>
          <Grid item xs={6}>
            <Typography type="subheading" gutterBottom>
              {moment(task.timeCreated).format(DATE_TIME_FORMAT)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography type="subheading" gutterBottom />
          </Grid>
          <Grid item xs={12}>
            <Typography type="display2">
              #{task.id} - {task.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography type="body2" gutterBottom>
              <ReactMarkdown source={task.content} />
            </Typography>
          </Grid>
          <Grid>
            <TaskUpdates updates={task.updates} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object,
};

Task.defaultProps = {
  task: null,
};

/**
 * Function necessary for react-redux to have the props from the state available in the component.
 * @param {*} state
 */
function mapStateToProps(state, props) {
  const { taskID } = props.match.params;
  if (taskID) {
    // TODO: The 10 in parseInt will lead to an issue when the ID gets bigger than 9999999999
    const task = _.find(state.tasks, ['id', parseInt(taskID, 10)]);

    return { task };
  }
  return {};
}

export default connect(mapStateToProps, { getTask })(Task);
