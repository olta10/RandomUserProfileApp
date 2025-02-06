import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const ProfileList = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const screenWidth = Dimensions.get('window').width; // Merr gjerësinë e ekranit

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=12');
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.reloadButton} onPress={fetchUsers}>
        <Text style={styles.reloadText}>🔄 Reload Profiles</Text>
      </TouchableOpacity>

      <ScrollView horizontal>
        <View style={[styles.table, { width: screenWidth - 20 }]}>  
          {/* Header */}
          <View style={styles.headerRow}>
            <Text style={[styles.headerCell, styles.imageHeader]}>Photo</Text>
            <Text style={styles.headerCell}>Name</Text>
            <Text style={styles.headerCell}>Location</Text>
            <Text style={styles.headerCell}>Email</Text>
            <Text style={styles.headerCell}>Phone</Text>
          </View>

          {/* Data Rows */}
          {users.map((user) => (
            <TouchableOpacity
              key={user.login.uuid}
              style={styles.row}
              onPress={() => navigation.navigate('ProfileDetails', { user })}
            >
              <Image source={{ uri: user.picture.large }} style={styles.profileImage} />
              <Text style={styles.cell}>{user.name.first} {user.name.last}</Text>
              <Text style={styles.cell}>{user.location.city}, {user.location.country}</Text>
              <Text style={styles.cell}>{user.email}</Text>
              <Text style={styles.cell}>{user.phone}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  reloadButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 15,
  },
  reloadText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  table: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  headerCell: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 12,
  },
  imageHeader: {
    flex: 0.8,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 14,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 80,  // Foto më e madhe për një pamje më të qartë
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  cell: {
    flex: 1,
    fontSize: 18, // Tekst më i madh për lexueshmëri më të mirë
    textAlign: 'center',
    paddingVertical: 10,
    color: '#333',
  },
});

export default ProfileList;
