import PropTypes from 'prop-types';
import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components';

import Assets from '../../src/constants/assets';
import Colors from '../../src/constants/colors';


const AppBaseView = styled.View`
  background: #fff;
  flex: 1;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  ${Platform.OS === 'ios' ? 'padding-top: 0px;' : ''}
`;


const AppBaseImage = styled.ImageBackground`
  background: ${Colors.baseColor};
  flex: 1;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  ${Platform.OS === 'ios' ? 'padding-top: 20px;' : ''}
`;


const AppBase = ({ image, children, ...props }) => (
  image ?
    <AppBaseImage
      source={Assets.Images.logoConic}
      {...props}
    >
      {children}
    </AppBaseImage> :
    <AppBaseView {...props}>
      {children}
    </AppBaseView>
);
AppBase.defaultProps = {
  image: false,
};

AppBase.propTypes = {
  image: PropTypes.bool,
};


export default AppBase;
