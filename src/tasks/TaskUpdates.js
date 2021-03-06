import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import moment from 'moment';
import PhoneIcon from 'material-ui-icons/PermPhoneMsg';
import FileIcon from 'material-ui-icons/Description';
import MailIcon from 'material-ui-icons/Email';
import { DATE_TIME_FORMAT } from '../utils/Defines';

/**
 * Component to display all updates of a task.
 */
class TaskUpdates extends Component {
  /**
   * Determines which icon to render depending on the type of the update
   */
  getIcon = (type) => {
    switch (type) {
      case 'PHONE_CALL':
        return <PhoneIcon />;
      case 'FILE':
        return <FileIcon />;
      case 'MAIL':
        return <MailIcon />;
      default:
        return <div />;
    }
  };

  /**
   * Render method
   */
  render() {
    const { updates } = this.props;

    if (updates === null) {
      return <div />;
    }

    return (
      <div>
        {typeof updates === 'undefined' && <div />}
        <Timeline>
          {updates.map(update => (
            <TimelineEvent
              title={update.title}
              createdAt={moment(update.timestamp).format(DATE_TIME_FORMAT)}
              icon={this.getIcon(update.type)}
              iconStyle={{ marginLeft: 0, marginTop: 0 }}
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
  updates: PropTypes.array,
};

TaskUpdates.defaultProps = {
  updates: null,
};

export default TaskUpdates;
