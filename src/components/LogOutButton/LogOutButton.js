import React from 'react';
import { connect } from 'react-redux';

//Style Imports
import Button from '@material-ui/core/Button';

const LogOutButton = (props) => (
  <Button

    className={props.className}
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
  >
    Log Out
  </Button>
);


export default connect()(LogOutButton);
