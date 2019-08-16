/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { authLogin } from '../../src/actions';
import LoginComponent from '../components/Login';


class LoginScreen extends Component {
  displayName = 'LoginScreen';

  constructor(props) {
    super(props);
    this.state = {
      userNameOrEmailAddress: null,
      password: null,
    };
  }

  componentDidMount() {
    const { loginMessage } = this.props;
    if (loginMessage !== null && loginMessage.token && loginMessage.token.length > 10) {
      Actions.reset('drawer');
    }
  }

  async componentWillReceiveProps(nextProps) {
    await this.handleRedirect(nextProps.loginMessage);
  }


  handleLoginSubmit = () => {
    const { userNameOrEmailAddress, password } = this.state;
    this.props.authLogin(userNameOrEmailAddress, password);
  };

  handleEmailChange = (userNameOrEmailAddress) => {
    this.setState({
      userNameOrEmailAddress,
    });
  };

  handlePasswordChange = (password) => {
    this.setState({
      password,
    });
  };

  handleRedirect = (loginMessage) => {
    if (loginMessage && loginMessage.result.accessToken) {
      try {
        Actions.listProductsScreen();
      } catch (e) {
        console.log(e);
      }
    }
  };

  render() {
    const { loginLoading, loginMessage } = this.props;
    if (loginMessage && loginLoading.accessToken) {
      return null;
    }

    let { loginError } = this.props;

    const { userNameOrEmailAddress, password } = this.state;

    // eslint-disable-next-line react/prop-types
    loginError = loginError || this.props.navigation.state.params.loginError;

    const disableLogin = (!userNameOrEmailAddress || userNameOrEmailAddress.length === 0 || !password || password.length === 0);

    return (
      <LoginComponent
        loading={loginLoading}
        loginError={loginError}
        disableLogin={disableLogin}
        onLoginSubmit={this.handleLoginSubmit}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
      />);
  }
}

LoginScreen.defaultProps = {
  loginError: null,
  loginMessage: null,
};

LoginScreen.propTypes = {
  loginLoading: PropTypes.bool.isRequired,
  loginError: PropTypes.object,
  loginMessage: PropTypes.object,
  authLogin: PropTypes.func.isRequired,
};

function initMapStateToProps(state) {
  return {
    loginError: state.auth.loginError,
    loginLoading: state.auth.loginLoading,
    loginMessage: state.auth.loginMessage,
  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({
    authLogin,
  }, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(LoginScreen);
