import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SortableHandle } from 'react-sortable-hoc';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/ModeEdit';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { DATE_TIME_FORMAT } from '../Defines';

/**
 * Styles for this component
 * @param {*} theme
 */
const styles = theme => ({
  cardHeader: {
    'padding-bottom': '0px',
  },
  cardContent: {
    'padding-bottom': '0px',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

/**
 * HOC provided by react-sortable-hoc to give a list item which reacts to being clicked and drags
 * the item.
 *
 */
const DragHandle = SortableHandle(() => <Avatar aria-label="Task">T</Avatar>);

/**
 * Display a single task.
 */
// TODO: Remove next line!
// eslint-disable-next-line
class TaskListItem extends Component {
  /**
   * Constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  /**
   * Handles the action when the expand button of the card is clicked.
   */
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  /**
   * Render function
   */
  render() {
    const { classes, task } = this.props;

    return (
      <div>
        <Card>
          <CardHeader
            className={classes.cardHeader}
            avatar={<DragHandle />}
            title={task.title}
            subheader={moment(task.timeCreated).format(DATE_TIME_FORMAT)}
          />
          <CardActions disableActionSpacing>
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
            {/* Fills the empty space that all following will be pushed over to the right. */}
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, { [classes.expandOpen]: this.state.expanded })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{task.content}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

TaskListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskListItem);
