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

class SignupComponent extends Component {
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
              />
              <IconTextInput
                icon="lock"
                placeholder="Password"
                colorIcon={Color.primaryColor}
              />
              <IconTextInput
                icon="lock"
                placeholder="Password"
                colorIcon={Color.primaryColor}
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
                title="Sign Up"
                disabled={disableLogin}
                loading={loading}
                onPress={onLoginSubmit}
              />
              <BR size={20} />
            </View>
            <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end', flexDirection: 'row'}}>
              <Text>New to conic? </Text>
              <TextButton
                  onPress={() => Actions.loginScreen()}
                  title="Login"
                  primary
              />
              <BR />
            </View>
          </AppBase>
        );
      }
}

SignupComponent.defaultProps = {
  registerMessage: null,
  registerError: null,
};

SignupComponent.propTypes = {
  disableSignUp: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  registerMessage: PropTypes.object,
  registerError: PropTypes.object,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSignupSubmit: PropTypes.func.isRequired,
};

export default SignupComponent;
