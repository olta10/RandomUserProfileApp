import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons

const ProfileList = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=12");
      const data = await response.json();
      setUsers(data.results);
      setFilteredUsers(data.results);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    setLoading(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setFilteredUsers(
        users.filter(
          (user) =>
            user.name.first.toLowerCase().includes(query.toLowerCase()) ||
            user.name.last.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredUsers(users);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      {/* Reload button */}
      <TouchableOpacity style={styles.reloadButton} onPress={fetchUsers}>
        <Ionicons name="reload-circle-outline" size={30} color="#fff" />
        <Text style={styles.reloadText}>Reload Profiles</Text>
      </TouchableOpacity>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Loading Spinner */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFB6C1" style={styles.spinner} />
      ) : (
        <FlatList
          data={filteredUsers}
          keyExtractor={(user) => user.login.uuid}
          renderItem={({ item: user }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("ProfileDetails", { user })}
            >
              <View style={styles.cardContent}>
                <Image source={{ uri: user.picture.large }} style={styles.profileImage} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{`${user.name.first} ${user.name.last}`}</Text>
                  <Text style={styles.userLocation}>{`${user.location.city}, ${user.location.country}`}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff5f7", // Baby Pink background
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  reloadButton: {
    backgroundColor: "#FFB6C1", // Baby Pink button
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: "center",
    marginBottom: 15,
  },
  reloadText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  searchBar: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
    borderColor: "#FFB6C1", // Baby Pink border
    borderWidth: 1,
  },
  spinner: {
    marginTop: 50,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 3,
    marginBottom: 20,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  userLocation: {
    fontSize: 14,
    color: "#888",
  },
});

export default ProfileList;
