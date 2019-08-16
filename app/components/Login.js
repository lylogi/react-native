/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';

import Assets from '../../src/constants/assets';
import Color from '../../src/constants/colors';
import Sizing from '../../src/constants/sizing';
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
      <AppBase>
          <KeyboardAwareScrollView contentContainerStyle={{flexDirection: 'column',
              justifyContent: 'center', minHeight:Sizing.DeviceHeight-60}}>
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
                onChangeText={onEmailChange}
                />
                <IconTextInput
                icon="lock"
                placeholder="Password"
                colorIcon={Color.primaryColor}
                onChangeText={onPasswordChange}
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
            </View>
            <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection: 'row'}}>
                <BR/>
                <Text>New to conic? </Text>
                <TextButton
                    onPress={() => Actions.signupScreen()}
                    title="Sign Up"
                    primary
                />
            </View>
          </KeyboardAwareScrollView>
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
