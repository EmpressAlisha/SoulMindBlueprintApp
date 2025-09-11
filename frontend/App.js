import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        SoulMind Blueprint App
      </Text>
      <Text style={styles.subtitle}>
        Welcome! Start your journey by exploring your blueprint.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf6f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#573d3d',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#7c6f5a',
  },
});
