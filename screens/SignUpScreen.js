import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, TextInput, Text, TouchableOpacity } from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [name, onChangeName] = useState(' ');
  const [email, onChangeEmail] = useState(' ');
  const [pass, onChangePass] = useState(' ');
  const [conPass, onChangeConPass] = useState(' ');
  const [errors, onChangeErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, email, pass]);

  const validateForm = () => {
    let errors = {};

    // validate name
    if (!name) {
      errors.name = 'Name is required';
    }

    // validate email
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    // validate password
    if (!pass) {
      errors.pass = 'Password is required';
    } else if (pass.length <= 8) {
      errors.pass = 'Pass must be at least 6 characters';
    }

    // set the errors and update form validity
    onChangeErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      // Form is valid, perform the submmision logic
      console.log('Foem submitted successfully!');
    } else {
      // Foem is invalid , display error messages
      console.log('Form has errors. Please correct them.')
    }
  };

  return (

    <View >
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 110, marginLeft: 10 }}>Create Account</Text>
      </View>
      <TextInput
        placeholder="Enter Your Name"
        style={[styles.container, { marginTop: 50 }]}
        value={name}
        onChangeText={(name) => onChangeName(name)}
      />
      <TextInput
        placeholder="Enter Your email"
        style={[styles.container, { marginTop: 30 }]}
        value={email}
        onChangeText={(email) => onChangeEmail(email)}
      />
      <TextInput
        placeholder="Enter password"
        style={[styles.container, { marginTop: 30 }]}
        keyboardType="numeric"
        value={pass}
        onChangeText={(pass) => onChangePass(pass)}
        secureTextEntry
      />
      <TextInput
        placeholder="confirm password"
        style={[styles.container, { marginTop: 30 }]}
        keyboardType="numeric"
        value={conPass}
        onChangeText={(conPass) => onChangeConPass(conPass)}
        secureTextEntry
      />
      {/* <View >
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={[styles.singInButton, { backgroundColor: "#244A61" }]}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>
            {"Sign Up ->"}
          </Text>
        </Pressable>
      </View> */}

      <TouchableOpacity
        style={[styles.singInButton, { backgroundColor: "#244A61" }, { opacity: isFormValid ? 1 : 0.5 }]}
        disabled={!isFormValid}
        onPress={handleSubmit}
      >
        <Text style={[styles.buttonText, { color: "white" }]}>{"Sign Up ->"}</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginLeft: 90 }}>
        <Text style={{ color: "black", fontSize: 15, fontWeight: "800" }} >Already Have Account? </Text>
        <Pressable
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#244A61", fontSize: 15, fontWeight: "800" }}>
            {"Sign In "}
          </Text>
        </Pressable>
      </View>

      {/* Display error message */}
      {Object.values(errors).map((error, index) => (
        <Text key={index} style={styles.error}>
          {error}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'grey',
    textAlign: "left",
    fontSize: 20,
  },
  singInButton: {
    borderRadius: 25,
    height: 40,
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: 'red',
    fontSize: 20,
    marginBottom: 12,
  },

});

export default SignUpScreen;
