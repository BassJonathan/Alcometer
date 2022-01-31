import React from 'react';
import { View } from 'react-native';
import RadioButtonComponent from './RadioButtonComponent';

const CustomRadioButtons = ({ radioValue, setRadioValue, setValue }) => {

  const onRadioBtnClick = (item) => {
    let updatedState = radioValue.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setRadioValue(updatedState);
    setValue(item.value);
  };

  return (
    <View>
      {radioValue.map((item) => (
        <RadioButtonComponent
          onPress={() => onRadioBtnClick(item)}
          selected={item.selected}
          key={item.id}
        >
          {item.name}
        </RadioButtonComponent>
      ))}
    </View>
  );
};
      
export default CustomRadioButtons;