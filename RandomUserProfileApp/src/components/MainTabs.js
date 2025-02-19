// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import ProfileList from "../components/ProfileList";

// const Tab = createBottomTabNavigator();

// const MainTabs = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ color, size }) => {
//         let iconName;
//         if (route.name === "Home") {
//           iconName = "home";
//         } else if (route.name === "Users") {
//           iconName = "people";
//         }
//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//       tabBarActiveTintColor: "#007BFF",
//       tabBarInactiveTintColor: "gray",
//       tabBarStyle: {
//         backgroundColor: "#fff",
//         height: 60,
//         borderTopWidth: 0,
//       },
//     })}
//   >
//     <Tab.Screen name="Home" component={ProfileList} />
//     <Tab.Screen name="Users" component={ProfileList} />
//   </Tab.Navigator>
// );

// export default MainTabs;
