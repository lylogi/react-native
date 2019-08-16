/* eslint-disable react/prop-types */
import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import ListProductsScreen from '../screens/ListProductsScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const AppRouter = () => (
  <Router>
    <Scene key="root" title="">
        <Scene
            key="loginScreen"
            component={LoginScreen}
            initial
            hideNavBar
        />
        <Scene
            key="signupScreen"
            component={SignupScreen}
            hideNavBar
        />
        <Scene
            key="listProductsScreen"
            component={ListProductsScreen}
            hideNavBar
        />
    </Scene>
  </Router>
);

export default AppRouter;
