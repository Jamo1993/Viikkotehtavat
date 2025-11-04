import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age,setAge] = useState<string>("")
  const Age:number = !isNaN(Number(age)) === true ? Number(age): 0 
  const lowerLimit: number = Age === 0 ? 0 : (220 - Age) * 0.65
  const higherLimit: number = Age === 0 ? 0 : (220 - Age) * 0.85



  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
      placeholder="0"
      keyboardType='number-pad'
      value={age}
      onChangeText={setAge}
      />
      <Text style={styles.text}>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text style={styles.text}>Higher limit: {higherLimit.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
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
  heading: {
    fontSize:30,
    marginTop:20,
    marginBottom:30
  },
  text: {
    marginVertical:10
  }
});
