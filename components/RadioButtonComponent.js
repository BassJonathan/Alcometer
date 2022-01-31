import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import StyleSheet from '../Style';

const RadioButtonComponent = ({ onPress, selected, children }) => {
    return (
      <View style={StyleSheet.radioButtonContainer}>
        <TouchableOpacity onPress={onPress} style={StyleSheet.radioButton}>
          {selected ? <View style={StyleSheet.radioButtonIcon} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={StyleSheet.radioButtonText}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  };
        
export default RadioButtonComponent;