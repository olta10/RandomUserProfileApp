import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const UserProfile = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: user.image || user.picture?.large }} // Fix image issue
        style={styles.image} 
        onError={(e) => console.log("Image Load Error:", e.nativeEvent.error)} // Debugging
      />
      <Text style={styles.name}>
        {user.firstName || user.name?.first} {user.lastName || user.name?.last}
      </Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.phone}>{user.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    backgroundColor: "#ccc", // Placeholder color in case image fails to load
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
  },
  phone: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
  },
});

export default UserProfile;
