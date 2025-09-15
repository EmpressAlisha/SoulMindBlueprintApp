import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import OnboardingScreen from './OnboardingScreen';

function HomeScreen({ navigation, route }) {
  const userData = route.params?.userData || null;
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SoulMind Blueprint App</Text>
      {userData && (
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome back, {userData.name}!</Text>
        </View>
      )}
      <Text style={styles.subtitle}>
        {userData 
          ? "Your journey continues. Explore your personalized blueprint."
          : "Welcome! Start your journey by exploring your blueprint."
        }
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Blueprint')}
      >
        <Text style={styles.buttonText}>View SoulMind Blueprint</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function BlueprintScreen({ route }) {
  const userData = route.params?.userData || null;
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SoulMind Blueprint</Text>
      {userData && (
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>Blueprint for {userData.name}</Text>
          <Text style={styles.userDetailsText}>
            Born: {userData.dateOfBirth} at {userData.timeOfBirth}
          </Text>
          <Text style={styles.userDetailsText}>
            Location: {userData.locationOfBirth}
          </Text>
        </View>
      )}
      <Text style={styles.subtitle}>Your blueprint info will appear here.</Text>
      {/* Later: Fetch and show blueprint data */}
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  const handleOnboardingComplete = (data) => {
    setUserData(data);
    setHasCompletedOnboarding(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={hasCompletedOnboarding ? "Home" : "Onboarding"}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#faf6f0',
          },
          headerTintColor: '#573d3d',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {!hasCompletedOnboarding ? (
          <Stack.Screen 
            name="Onboarding" 
            options={{ headerShown: false }}
          >
            {(props) => (
              <OnboardingScreen 
                {...props} 
                onComplete={handleOnboardingComplete}
              />
            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen 
              name="Home" 
              options={{ title: 'SoulMind Blueprint' }}
            >
              {(props) => <HomeScreen {...props} route={{ ...props.route, params: { userData } }} />}
            </Stack.Screen>
            <Stack.Screen 
              name="Blueprint" 
              options={{ title: 'Your Blueprint' }}
            >
              {(props) => <BlueprintScreen {...props} route={{ ...props.route, params: { userData } }} />}
            </Stack.Screen>
          </>
        )}
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
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#7c6f5a',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  welcomeSection: {
    marginBottom: 16,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#8b7355',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8b7355',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#573d3d',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#faf6f0',
    fontSize: 16,
    fontWeight: '600',
  },
  userInfo: {
    backgroundColor: '#f5f0ea',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d4c7b5',
  },
  userInfoText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#573d3d',
    marginBottom: 8,
  },
  userDetailsText: {
    fontSize: 14,
    color: '#7c6f5a',
    textAlign: 'center',
    marginBottom: 4,
  },
});