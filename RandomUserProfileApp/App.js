  import React, { useState } from "react";
  import { NavigationContainer } from "@react-navigation/native";
  import { createStackNavigator } from "@react-navigation/stack";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  import { Ionicons } from "react-native-vector-icons";
  import ProfileList from "./src/components/ProfileList";
  import UserProfile from "./src/components/UserProfile";
  import Login from "./src/components/Login";
  import UsersScreen from "./src/components/UsersScreen";

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  // 🏠 Home Stack (Profile List + Profile Details)
  const HomeStack = () => (
    <Stack.Navigator>
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

  // 🌟 Bottom Tab Navigator (After Login)
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
        tabBarActiveTintColor: "#007BFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      {/* Stack Navigator inside the Tab Navigator */}
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Users" component={UsersScreen} />
    </Tab.Navigator>
  );

  // 🚀 Main App with Login Flow
  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            <Stack.Screen name="MainTabs" component={MainTabs} />
          ) : (
            <Stack.Screen name="Login">
              {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default App;
