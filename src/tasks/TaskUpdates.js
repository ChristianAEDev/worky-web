import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import moment from 'moment';
import AddIcon from 'material-ui-icons/Add';
import { DATE_TIME_FORMAT } from '../Defines';

/**
 * Component to display all updates of a task.
 */
class TaskUpdates extends Component {
  /**
   * Render method
   */
  render() {
    const { updates } = this.props;
    return (
      <div>
        <Timeline>
          {updates.map(update => (
            <TimelineEvent
              title={update.title}
              createdAt={moment(update.timestamp).format(DATE_TIME_FORMAT)}
              icon={<AddIcon />}
              iconColor="#5C6BC0"
            >
              {update.description}
            </TimelineEvent>
          ))}
        </Timeline>
      </div>
    );
  }
}

TaskUpdates.propTypes = {
  updates: PropTypes.array.isRequired,
};

export default TaskUpdates;
