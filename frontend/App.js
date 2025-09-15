import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, Button, View, ScrollView } from 'react-native';

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
  const [blueprint, setBlueprint] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchBlueprint();
  }, []);

  const fetchBlueprint = async () => {
    try {
      setLoading(true);
      // Use localhost for development - replace with your computer's IP for physical device testing
      const response = await fetch('http://localhost:3001/api/blueprint');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBlueprint(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>SoulMind Blueprint</Text>
        <Text style={styles.subtitle}>Loading your blueprint...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>SoulMind Blueprint</Text>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Text style={styles.subtitle}>Make sure your backend server is running on port 3001</Text>
        <Button title="Retry" onPress={fetchBlueprint} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>SoulMind Blueprint</Text>
        
        {blueprint && (
          <View style={styles.blueprintContainer}>
            <Text style={styles.nameText}>{blueprint.name}</Text>
            <Text style={styles.purposeText}>{blueprint.purpose}</Text>
            
            <View style={styles.elementsContainer}>
              <Text style={styles.sectionTitle}>Blueprint Elements</Text>
              {blueprint.elements.map((element, index) => (
                <View key={index} style={styles.elementCard}>
                  <Text style={styles.elementTitle}>{element.title}</Text>
                  <Text style={styles.elementDescription}>{element.description}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
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
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  blueprintContainer: {
    width: '100%',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#573d3d',
    marginBottom: 8,
    textAlign: 'center',
  },
  purposeText: {
    fontSize: 16,
    color: '#7c6f5a',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  elementsContainer: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#573d3d',
    marginBottom: 15,
    textAlign: 'center',
  },
  elementCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#9c7b7b',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  elementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#573d3d',
    marginBottom: 8,
  },
  elementDescription: {
    fontSize: 16,
    color: '#7c6f5a',
    lineHeight: 22,
  },
});