import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Counter} from '../components';

const CounterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Counter />
    </SafeAreaView>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
