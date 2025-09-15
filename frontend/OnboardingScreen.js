import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';

const OnboardingScreen = ({ navigation, onComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    locationOfBirth: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const { name, dateOfBirth, timeOfBirth, locationOfBirth } = formData;
    
    if (!name.trim()) {
      Alert.alert('Validation Error', 'Please enter your name');
      return false;
    }
    
    if (!dateOfBirth.trim()) {
      Alert.alert('Validation Error', 'Please enter your date of birth');
      return false;
    }
    
    if (!timeOfBirth.trim()) {
      Alert.alert('Validation Error', 'Please enter your time of birth');
      return false;
    }
    
    if (!locationOfBirth.trim()) {
      Alert.alert('Validation Error', 'Please enter your location of birth');
      return false;
    }
    
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onComplete(formData);
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to Your Journey</Text>
          <Text style={styles.subtitle}>
            Let's gather some essential information to create your personalized SoulMind Blueprint
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(value) => handleInputChange('name', value)}
              placeholder="Enter your full name"
              placeholderTextColor="#a69485"
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              value={formData.dateOfBirth}
              onChangeText={(value) => handleInputChange('dateOfBirth', value)}
              placeholder="MM/DD/YYYY"
              placeholderTextColor="#a69485"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Time of Birth</Text>
            <TextInput
              style={styles.input}
              value={formData.timeOfBirth}
              onChangeText={(value) => handleInputChange('timeOfBirth', value)}
              placeholder="HH:MM AM/PM"
              placeholderTextColor="#a69485"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Location of Birth</Text>
            <TextInput
              style={styles.input}
              value={formData.locationOfBirth}
              onChangeText={(value) => handleInputChange('locationOfBirth', value)}
              placeholder="City, State/Province, Country"
              placeholderTextColor="#a69485"
              autoCapitalize="words"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Create My Blueprint</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf6f0',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#573d3d',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7c6f5a',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#573d3d',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f0ea',
    borderWidth: 1,
    borderColor: '#d4c7b5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#573d3d',
  },
  submitButton: {
    backgroundColor: '#8b7355',
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 20,
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
  submitButtonText: {
    color: '#faf6f0',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OnboardingScreen;