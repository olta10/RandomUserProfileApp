import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const UserProfile = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.image} />
      <Text style={styles.name}>{user.name.first} {user.name.last}</Text>

      <View style={styles.infoContainer}>
        <Ionicons name="mail-outline" size={20} color="#FF69B4" />
        <Text style={styles.infoText}>{user.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Ionicons name="call-outline" size={20} color="#FF69B4" />
        <Text style={styles.infoText}>{user.phone}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Ionicons name="location-outline" size={20} color="#FF69B4" />
        <Text style={styles.infoText}>
          {user.location.city}, {user.location.country}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F8C8DC",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "#FFB6C1",
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: "90%",
    elevation: 3,
    shadowOpacity: 0.1,
  },
  infoText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#555",
  },
});

export default UserProfile;
