import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgetPScreen from "./screens/ForgetPScreen"
import HomeScreen from "./screens/HomeScreen";
import JobDescriptionScreen from "./screens/JobdescriptionScreen";
import PortfolioScreen from "./screens/PortfolioScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide header for all screens
        }}
      >
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="JobDescription" component={JobDescriptionScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ForgetP" component={ForgetPScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
