import React, { Component } from 'react';
import moment from 'moment';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { DATE_TIME_FORMAT } from '../Defines';

/**
 * Component to display/edit task.
 */
class Task extends Component {
  /**
   * Render method.
   */
  render() {
    const { task } = this.props;

    return (
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
            {task.content}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Task;
