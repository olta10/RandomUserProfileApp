import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import ProfileList from "./src/components/ProfileList";
import UserProfile from "./src/components/UserProfile";
import Login from "./src/components/Login";
import UsersScreen from "./src/components/UsersScreen";

// Create Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack for Profile List and Profile Details
const HomeStack = () => (
  <Stack.Navigator
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: "#FFB6C1", // Baby pink background
    //   },
    //   headerTintColor: "#fff", // White text color
    //   headerTitleStyle: {
    //     fontWeight: "bold",
    //   },
    // }}
  >
    <Stack.Screen
      name="ProfileList"
      component={ProfileList}
      options={{ title: "User Profiles" }}
    />
    <Stack.Screen
      name="ProfileDetails"
      component={UserProfile}
      options={{ title: "Profile Details" }}
    />
  </Stack.Navigator>
);

// Main Tab Navigator for all Screens (Profile List, Users)
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Users") {
          iconName = "people";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#FFB6C1", // Baby pink for active tab
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        backgroundColor: "#fff5f7", // Light pink background for the tab bar
        borderTopWidth: 0,
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Users" component={UsersScreen} />
  </Tab.Navigator>
);

// Main App with login flow
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          // Once logged in, show the MainTabs with the Tab Bar
          <Stack.Screen name="MainTabs" component={MainTabs} />
        ) : (
          // If not logged in, show the Login screen
          <Stack.Screen name="Login">
            {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
