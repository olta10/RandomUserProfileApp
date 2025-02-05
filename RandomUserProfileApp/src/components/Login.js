import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validUsername, setValidUsername] = useState('');
  const [validPassword, setValidPassword] = useState('');

  // Fetch random user data from the API
  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=1');
      const data = await response.json();
      const user = data.results[0];
      setValidUsername(user.login.username);  // Extract username  john_doe123
      setValidPassword(user.login.password);  // Extract password  randomPassword123 
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchRandomUser();  // Fetch username and password on component mount
  }, []);

  const handleLogin = () => {
    if (username === validUsername && password === validPassword) {
      // If credentials match, navigate to the Home screen
      navigation.replace('Home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="#007BFF" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 16,
  },
});

export default Login;
