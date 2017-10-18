import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import Grid from 'material-ui/Grid';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

require('codemirror/mode/markdown/markdown');
/**
 * Component to edit markdown code.
 */
const Editor = (props) => {
  /**
   * Render function
   */
  const { value } = props;

  // Use a portal to render the children into the element
  return (
    <Grid container style={{ flexGrow: 1 }}>
      <Grid item xs={12} sm={6}>
        <CodeMirror
          value={value}
          options={{
            mode: 'markdown',
            lineNumbers: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ReactMarkdown source={value} />
      </Grid>
    </Grid>
  );
};

Editor.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Editor;
