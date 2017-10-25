import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { CircularProgress } from 'material-ui/Progress';
import ReactMarkdown from 'react-markdown';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { DATE_TIME_FORMAT } from '../utils/Defines';
import TaskUpdates from './TaskUpdates';

/**
 * Component to display/edit task.
 */
class Task extends Component {
  /**
   * Render method.
   */
  render() {
    const { task } = this.props;

    if (typeof task === 'undefined') {
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
  task: PropTypes.object.isRequired,
};

export default Task;
