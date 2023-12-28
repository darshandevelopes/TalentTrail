import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { sharedStyles } from "../styles";

const ForgetPScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/forgot-pass.png")}
        style={{ width: "100%", height: "50%", marginTop: 25 }}
      />
      <View style={styles.interactionArea}>
        <Text style={{ fontSize: 40 }}>{"Forgot Password?"}</Text>

        <Text style={[sharedStyles.TextSubheading, { marginTop: 30 }]}>
          {"Please reset it by verifying your identity"}
        </Text>

        <TextInput
          placeholder="Enter Email Address"
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="send"
          style={styles.emailInput}
        />

        <Pressable style={styles.nextButton}>
          <Text style={[sharedStyles.TextHeading, { color: "white" }]}>
            {"Next"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  interactionArea: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-around",
    maxHeight: "32%",
  },
  emailInput: {
    ...sharedStyles.TextRegular,
    borderBottomWidth: 1,
    width: 250,
    marginTop: 40,
  },
  nextButton: {
    backgroundColor: "#244A61",
    height: 40,
    width: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});

export default ForgetPScreen;
