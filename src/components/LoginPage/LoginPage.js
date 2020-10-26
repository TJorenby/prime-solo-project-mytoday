import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';

//Style Imports
import './LoginPage.scss';

class LoginPage extends Component {
  render() {
    return (
      <div >
        <img
          className="login__logo"
          src="/images/myToday-logo-white4.png"
          alt=""
        />
        <div className="login__form">
          <LoginForm />
        </div>

        <center>
          <button
            type="button"
            className="btn_asLink text_color"
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            Register
          </button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
