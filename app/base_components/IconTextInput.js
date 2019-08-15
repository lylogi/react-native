import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconTextInput = ({ icon, placeholder,colorIcon, ...props }) => (
  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',alignItems: 'center',width:'80%'}}>
    <Icon name={icon} size={20} style={{padding: 10, color:colorIcon}} />
    <TextInput
        style={{flex: 1}}
        placeholder={placeholder}
        underlineColorAndroid="#B9B9B9"
    />
  </View>
)

// const TextInput = styled.TextInput`
//   font-family: 'Roboto Slab';
//   padding: 15px;
//   width: 100%;
//   min-height: 42px;
//   font-size: 18px;
//   color: #989898;
//   text-align: left;
//   border: 0 solid #ddd;
//   border-bottom-width: ${Platform.OS === 'ios' ? '1px' : '0px'};
//   border-bottom-color: #ddd;
//   `;

export default IconTextInput;
