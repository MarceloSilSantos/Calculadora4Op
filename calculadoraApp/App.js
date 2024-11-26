import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState(''); // Estado para armazenar o valor atual da calculadora
  const [output, setOutput] = useState(''); // Estado para armazenar o resultado

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handleCalculate = () => {
    try {
      // Avalia a expressão matemática
      const result = eval(input);
      setOutput(result.toString());
      setInput('');
    } catch (error) {
      setOutput('Erro');
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.output}>{output}</Text>
      </View>

      <View style={styles.buttons}>
        {/* Linha 1 */}
        <View style={styles.row}>
          <Button title="7" onPress={() => handlePress('7')} />
          <Button title="8" onPress={() => handlePress('8')} />
          <Button title="9" onPress={() => handlePress('9')} />
          <Button title="/" onPress={() => handlePress('/')} />
        </View>

        {/* Linha 2 */}
        <View style={styles.row}>
          <Button title="4" onPress={() => handlePress('4')} />
          <Button title="5" onPress={() => handlePress('5')} />
          <Button title="6" onPress={() => handlePress('6')} />
          <Button title="*" onPress={() => handlePress('*')} />
        </View>

        {/* Linha 3 */}
        <View style={styles.row}>
          <Button title="1" onPress={() => handlePress('1')} />
          <Button title="2" onPress={() => handlePress('2')} />
          <Button title="3" onPress={() => handlePress('3')} />
          <Button title="-" onPress={() => handlePress('-')} />
        </View>

        {/* Linha 4 */}
        <View style={styles.row}>
          <Button title="0" onPress={() => handlePress('0')} />
          <Button title="C" onPress={handleClear} />
          <Button title="=" onPress={handleCalculate} />
          <Button title="+" onPress={() => handlePress('+')} />
        </View>
      </View>
    </View>
  );
}

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  display: {
    width: '100%',
    padding: 20,
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  output: {
    fontSize: 30,
    color: '#666',
  },
  buttons: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    borderRadius: 10,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
