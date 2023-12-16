import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, TextInput, Text, TouchableOpacity } from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [pass, onChangePass] = useState('');
  const [conPass, onChangeConPass] = useState('');
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
    } else if (pass.length <6) {
      errors.pass = 'Password must be at least  characters';
    }

    if (!conPass) {
      errors.conPass = 'Confirm Password is required';
    } else if (conPass!= pass) {
      errors.conPass = 'Confirm password should be same as password'
    }

    // set the errors and update form validity
    onChangeErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      // Form is valid, perform the submmision logic
      console.log('Form submitted successfully!');
    } else {
      // Foem is invalid , display error messages
      console.log('Form has errors. Please correct them.')
    }
  };

  return (

    <View >
      <View>
        <View >
          <Pressable
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.arrow}>
              {"<-Home"}
            </Text>
          </Pressable>
        </View>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 10 }}>Create Account</Text>
      </View>
      <TextInput
        style={styles.container}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={(name) => onChangeName(name)}
      />
      <TextInput
        placeholder="Enter Your email"
        style={styles.container}
        value={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        placeholder="Enter password"
        style={styles.container}
        keyboardType="numeric"
        value={pass}
        onChangeText={(pass) => onChangePass(pass)}
      />
      <TextInput
        placeholder="confirm password"
        style={styles.container}
        keyboardType="numeric"
        value={conPass}
        onChangeText={(conPass) => onChangeConPass(conPass)}
      />

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
    marginTop:30,
  },
  singInButton: {
    borderRadius: 25,
    height: 40,
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  arrow:{
    color:'black',
    marginTop:70,
    margin:10,
    fontWeight:'bold',
    fontSize: 20,
  },
  error: {
    color: 'red',
    fontSize: 20,
  },

});

export default SignUpScreen;
