import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import ProfileList from "./src/components/ProfileList";
import UserProfile from "./src/components/UserProfile";  // Use the correct import
import Login from "./src/components/Login";  // Import Login correctly


const Stack = createStackNavigator();

// Home Screen should be defined BEFORE App()
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Random User Profiles</Text>
      <ProfileList navigation={navigation} />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">  
        <Stack.Screen
          name="Login"
          component={Login}  // Corrected Login screen
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Random User Profiles" }}
        />
        <Stack.Screen
          name="ProfileDetails"
          component={UserProfile}
          options={{ title: "Profile Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
});

export default App;
