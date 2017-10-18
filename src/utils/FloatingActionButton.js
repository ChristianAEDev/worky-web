import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';
import AddIcon from 'material-ui-icons/Add';

const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

/**
 * Component to display a FloatingActionButton
 */
class FloatingActionButton extends Component {
  /**
   * Render method
   */
  render() {
    return (
      <Button fab color="primary" style={fabStyle} onClick={this.props.onClick}>
        <AddIcon />
      </Button>
    );
  }
}

FloatingActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FloatingActionButton;
