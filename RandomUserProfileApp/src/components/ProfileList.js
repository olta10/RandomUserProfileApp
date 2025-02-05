import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';

const ProfileList = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.profileCard}
      onPress={() => navigation.navigate('ProfileDetails', { user: item })}
    >
      <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
        <Text style={styles.location}>{item.location.city}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button title="Reload Profiles" onPress={fetchUsers} color="#007BFF" />
      <FlatList
        data={users}
        keyExtractor={(item) => item.login.uuid}
        renderItem={renderItem}
        extraData={users}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: 20,
  },
  list: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
    width: '95%',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProfileList;
