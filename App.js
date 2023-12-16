import React from "react";
import JobdescriptionScreen from "./screens/JobdescriptionScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

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
        <Stack.Screen name="Jobdescription" component={JobdescriptionScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        
        
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
