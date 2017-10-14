import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';

/**
 * Navigation bar and drawer.
 */
class Navigation extends Component {
  state = {
    drawerOpen: false,
  };

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  /**
   * Render method
   */
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton
              color="contrast"
              aria-label="open drawer"
              onClick={() => this.handleDrawerOpen()}
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" noWrap>
              worky
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onRequestClose={() => this.handleDrawerClose()}>
          <div>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItem>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Navigation;
