import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconTextInput = ({ icon, placeholder,colorIcon,onChangeText, ...props }) => (
  <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center',width:'80%'}}>
    <Icon name={icon} size={20} style={{padding: 10, color:colorIcon}} />
    <TextInput
        style={{flex: 1}}
        placeholder={placeholder}
        underlineColorAndroid="#B9B9B9"
        onChangeText={onChangeText}
    />
  </View>
)
  
export default IconTextInput;
