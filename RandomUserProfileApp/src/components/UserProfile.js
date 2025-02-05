import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

const UserProfile = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.image} />
      <Text style={styles.name}>{user.name.first} {user.name.last}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.phone}>{user.phone}</Text>
      <Text style={styles.address}>
        {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.country}
      </Text>
      <Button title="Back to List" onPress={() => navigation.goBack()} color="#007BFF" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  email: {
    fontSize: 20,
    color: '#555',
    marginBottom: 10,
  },
  phone: {
    fontSize: 20,
    color: '#555',
    marginBottom: 10,
  },
  address: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#777',
  },
});

export default UserProfile;
