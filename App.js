import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');

  const handleButtonPress = (button) => {
    if (button === '=') {
      calculateResult();
    } else if (button === 'C') {
      clearInput();
    } else {
      updateInput(button);
    }
  };

  const calculateResult = () => {
    try {
      const newResult = eval(input);
      setResult(newResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('0');
  };

  const updateInput = (button) => {
    setInput((prevInput) => prevInput + button);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="Enter expression"
        onChangeText={(text) => setInput(text)}
      />
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonContainer}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map(
          (button) => (
            <TouchableOpacity
              key={button}
              style={styles.button}
              onPress={() => handleButtonPress(button)}
            >
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    textAlign: 'right',
    fontSize: 20,
    marginBottom: 10,
  },
  result: {
    width: '100%',
    textAlign: 'right',
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderWidth: 1,
    borderColor: '#999999',
  },
  buttonText: {
    fontSize: 20,
  },
});
