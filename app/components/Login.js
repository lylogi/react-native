/* eslint-disable react/forbid-prop-types */
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Assets from '../../src/constants/assets';
import Color from '../../src/constants/colors';
import AppBase from '../base_components/AppBase';
import BR from '../base_components/BR';
import IconTextInput from '../base_components/IconTextInput';
import RoundButton from '../base_components/RoundButton';
import TextButton from '../base_components/TextButton';

class LoginComponent extends Component {
  render() {
    const {
      loading, onLoginSubmit, onEmailChange, onPasswordChange, loginError, disableLogin,
    } = this.props;

    return (
      <AppBase
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <View style={{flex:3, justifyContent:'center', alignItems:'center'}}>
          <Image
            resizeMode={'cover'}
            source={Assets.Images.logoConic}
          />
        </View>
        <View style={{flex:5}}>
          <IconTextInput
            icon="user"
            placeholder="Email Address"
            colorIcon={Color.primaryColor}
            onChangeText={debounce(onEmailChange, 500)}
          />
          <IconTextInput
            icon="lock"
            placeholder="Password"
            colorIcon={Color.primaryColor}
            onChangeText={debounce(onPasswordChange, 500)}
          />
          <TextButton
            onPress={() => {
            }}
            title="Forgot your password?"
            style={{textAlign:'center', textDecorationLine:'underline'}}
            primary
            underlineColorAndroid="#B9B9B9"
          />
          <RoundButton
            title="Sign In"
            disabled={false}
            loading={loading}
            onPress={onLoginSubmit}
          />
          <BR size={20} />
        </View>
        <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end', flexDirection: 'row'}}>
          <Text>New to conic? </Text>
          <TextButton
              onPress={() => Actions.signupScreen()}
              title="Sign Up"
              primary
          />
          <BR />
        </View>
      </AppBase>
    );
  }
}

LoginComponent.defaultProps = {
  loginError: null,
};

LoginComponent.propTypes = {
  disableLogin: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  loginError: PropTypes.object,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
};

export default LoginComponent;
