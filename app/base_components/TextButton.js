import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import PrimaryText from './PrimaryText';
import SecondaryText from './SecondaryText';

const TextButton = ({
  title, primary, onPress, ...props
}) => (
  <TouchableOpacity
    onPress={onPress}
  >
    {
      primary && <PrimaryText {...props}>{title}</PrimaryText>
    }

    {
      !primary && <SecondaryText {...props}>{title}</SecondaryText>
    }
  </TouchableOpacity>
);

TextButton.defaultProps = {
  primary: false,
};

TextButton.propTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};


export default TextButton;
