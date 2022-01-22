import React, { useState, useCallback } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {

  const [result, setResult] = useState(0)
  const [weight, setWeight] = useState(0)

  //Bottles-Dropdown:
  const [bottlesOpen, setBottlesOpen] = useState(false);
  const [bottlesValue, setBottlesValue] = useState(null);
  const [bottlesItems, setBottlesItems] = useState([
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
    {label: '6', value: 6},
    {label: '7', value: 7},
    {label: '8', value: 8},
    {label: '9', value: 9},
    {label: '10', value: 10},
  ]);
  //Hours-Dropdown:
  const [hoursOpen, setHoursOpen] = useState(false);
  const [hoursValue, setHoursValue] = useState(null);
  const [hoursItems, setHoursItems] = useState([
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
    {label: '6', value: 6},
    {label: '7', value: 7},
    {label: '8', value: 8},
    {label: '9', value: 9},
    {label: '10', value: 10},
  ]);

  const onOpenBottles = useCallback(() => {
    setHoursOpen(false);
  }, []);

  const onOpenHours = useCallback(() => {
    setBottlesOpen(false);
  }, []);
  
  const genders = [
    {label: 'Male', value: true},
    {label: 'Female', value: false}
  ]

  const [isMale, setIsMale] = useState(true);


  function calculate() {
    var litres = bottlesValue * 0.33;
    var grams = litres * 8 * 4.5;
    var burning = weight / 10;
    var gLeft = grams - burning * hoursValue;

    if (isMale) {
      setResult(gLeft / (weight * 0.7))
    } else {
      setResult(gLeft / (weight * 0.6))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Alcometer</Text>
      </View>
      <View style={styles.section}>
        <Text>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          placeholder='in kilograms'
          keyboardType='numeric'
        />
      </View>
      <View style={styles.section}>
        <Text>Bottles</Text>
        <DropDownPicker
          open={bottlesOpen}
          value={bottlesValue}
          items={bottlesItems}
          setOpen={setBottlesOpen}
          setValue={setBottlesValue}
          setItems={setBottlesItems}
          onOpen={onOpenBottles}
          zIndex={2000}
          zIndexInverse={1000}
        />
      </View>
      <View style={styles.section}>
        <Text>Time</Text>
        <DropDownPicker
          open={hoursOpen}
          value={hoursValue}
          items={hoursItems}
          setOpen={setHoursOpen}
          setValue={setHoursValue}
          setItems={setHoursItems}
          onOpen={onOpenHours}
          zIndex={1000}
          zIndexInverse={2000}
        />
      </View>
      <View>
        <Text>Gender</Text>
        <RadioForm
          style={styles.radio}
          buttonSize= {10}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setIsMale(value)}}
        />
      </View>
      <View>
        <Text>{result.toFixed(2)}</Text>
      </View>
      <View>
        <Button
          title='Calculate'
          onPress={calculate}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {

  }
});
