import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Counter</Text>
        <Text>Count: {count}</Text>
        <Button
            onPress={() => setCount(count + 1)}
            title="counter"
            color="#841584"
            accessibilityLabel="this purple button increments one to counter"
        />
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
});
