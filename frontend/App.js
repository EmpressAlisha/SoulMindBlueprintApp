import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SoulMind Blueprint App</Text>
      <Text style={styles.subtitle}>Welcome! Start your journey by exploring your blueprint.</Text>
      <Button
        title="View SoulMind Blueprint"
        onPress={() => navigation.navigate('Blueprint')}
      />
    </SafeAreaView>
  );
}

function BlueprintScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SoulMind Blueprint</Text>
      <Text style={styles.subtitle}>Your blueprint info will appear here.</Text>
      {/* Later: Fetch and show blueprint data */}
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Blueprint" component={BlueprintScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
    marginBottom: 20,
    textAlign: 'center',
  },
});