import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import LottieView from "lottie-react-native";
import { sharedStyles } from "../styles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Bouncing Animation */}
      <LottieView
        source={require("../assets/BouncingAnimation.json")}
        style={styles.bouncingAnimation}
        autoPlay
        loop
      />

      <View style={styles.buttonsContainer}>
        {/* Sign In Buttons */}
        <Pressable
          style={[styles.singInButton, { backgroundColor: "#244A61" }]}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>
            {"SIGN IN WITH GOOGLE"}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={[styles.singInButton, { backgroundColor: "#D9D9D9" }]}
        >
          <Text style={[styles.buttonText, { color: "#244A61" }]}>
            {"SIGN IN WITH EMAIL"}
          </Text>
        </Pressable>

        {/* Text below Sign In buttons */}
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={[sharedStyles.TextRegular, { color: "black" }]}>
            {"Don't have an account? "}
          </Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={[
                sharedStyles.TextRegular,
                { fontWeight: "bold", color: "#244A61" },
              ]}
            >
              {"Sign up"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bouncingAnimation: {
    width: 304,
    aspectRatio: 1,
    alignSelf: "center",
    marginTop: "10%",
  },
  buttonsContainer: {
    maxHeight: "25%",
    flex: 1,
    marginTop: "15%",
    justifyContent: "space-around",
  },
  singInButton: {
    borderRadius: 25,
    height: 40,
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    ...sharedStyles.TextRegular,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
