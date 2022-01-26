import React, { useState, useCallback } from 'react';
import { Button, ScrollView, Text, TextInput, View, SafeAreaView, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';

import StyleSheet from './Style';

export default function App() {

  const [result, setResult] = useState(0)
  const [weight, setWeight] = useState(0)

  //Bottles-Dropdown:
  const [bottlesOpen, setBottlesOpen] = useState(false);
  const [bottlesValue, setBottlesValue] = useState(null);
  const [bottlesItems, setBottlesItems] = useState([
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
  ]);

  //Hours-Dropdown:
  const [hoursOpen, setHoursOpen] = useState(false);
  const [hoursValue, setHoursValue] = useState(null);
  const [hoursItems, setHoursItems] = useState([
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
  ]);

  const onOpenBottles = useCallback(() => {
    setHoursOpen(false);
  }, []);

  const onOpenHours = useCallback(() => {
    setBottlesOpen(false);
  }, []);

  const genders = [
    { label: 'Male', value: true },
    { label: 'Female', value: false }
  ]

  const [isMale, setIsMale] = useState(true);

  const showAlert = () => {
    Alert.alert(
      "Weight missing!",
      "Enter a number for weight."
    )
  }

  function calculate() {
    if (weight == '' || weight == 0) {
      showAlert();
      setResult(0);
    } else {
      var litres = bottlesValue * 0.33;
      var grams = litres * 8 * 4.5;
      var burning = weight / 10;
      var gLeft = grams - burning * hoursValue;

      if (isMale) {
        var result = gLeft / (weight * 0.7)
        if (result < 0) {
          setResult(0)
        } else {
          setResult(result)
        }
      } else {
        var result = gLeft / (weight * 0.7)
        if (result < 0) {
          setResult(0)
        } else {
          setResult(result)
        }
      }
    }
  }

  return (
    <SafeAreaView>
      <ScrollView overScrollMode>
        <View style={StyleSheet.header}>
          <Text style={StyleSheet.heading}>Alcometer</Text>
        </View>
        <View style={StyleSheet.section}>
          <Text style={StyleSheet.sectionHeading}>Weight</Text>
          <TextInput
            style={StyleSheet.input}
            onChangeText={setWeight}
            placeholder='in kilograms'
            keyboardType='number-pad'
            maxLength={3}
          />
        </View>
        <View style={[StyleSheet.section, {zIndex: 3000}]}>
          <Text style={StyleSheet.sectionHeading}>Bottles</Text>
          <DropDownPicker
            open={bottlesOpen}
            value={bottlesValue}
            items={bottlesItems}
            setOpen={setBottlesOpen}
            setValue={setBottlesValue}
            setItems={setBottlesItems}
            onOpen={onOpenBottles}
            //placeholder='Select number of bottles you drank'
            zIndex={2000}
            zIndexInverse={1000}
            listMode='SCROLLVIEW'
            scrollViewProps={{ nestedScrollEnabled: true, }}
          />
        </View>
        <View style={[StyleSheet.section, {zIndex: 2000}]}>
          <Text style={StyleSheet.sectionHeading}>Time</Text>
          <DropDownPicker
            open={hoursOpen}
            value={hoursValue}
            items={hoursItems}
            setOpen={setHoursOpen}
            setValue={setHoursValue}
            setItems={setHoursItems}
            onOpen={onOpenHours}
            //placeholder='Select the number of hours you have been drinking'
            zIndex={1000}
            zIndexInverse={2000}
            listMode='SCROLLVIEW'
            scrollViewProps={{ nestedScrollEnabled: true, }}
          />
        </View>
        <View style={StyleSheet.section}>
          <Text style={StyleSheet.sectionHeading}>Gender</Text>
          <RadioForm
            style={StyleSheet.radio}
            buttonSize={10}
            radio_props={genders}
            initial={0}
            onPress={(value) => { setIsMale(value) }}
          />
        </View>
        <View style={StyleSheet.resultSection}>
        <Text style={[{ color: result > 0.4 ? '#f00' : result > 0.3 ? '#ff0' : '#0f0'}, StyleSheet.result]}>{result.toFixed(2)}</Text>
        </View>
        <View>
          <Button
            title='Calculate'
            onPress={calculate}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
