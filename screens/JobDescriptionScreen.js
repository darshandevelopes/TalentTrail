import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";
import { sharedStyles } from "../styles";

const JobDescriptionScreen = ({ navigation }) => {
  return (
    <View>
      {/* rectagleMain - image of Company */}
      <View style={styles.rectangleMain}>
        {/* rectangleTwo - Company logo */}
        <View style={styles.rectangleTwo}></View>
        <Text style={[sharedStyles.TextTitle, { marginLeft: "20%" }]}>
          Google LLC
        </Text>
        <Text style={[sharedStyles.TextSubheading, { marginLeft: "20%" }]}>
          Sillicon Vally
        </Text>
        <View style={styles.line}></View>
        <Text
          style={[
            sharedStyles.TextHeading,
            { marginLeft: "15%", marginVertical: "4%" },
          ]}
        >
          About the Job
        </Text>
      </View>
      <ScrollView style={{ marginBottom: "10%" }}>
        <View style={{ marginTop: "50%", marginLeft: "10%" }}>
          <Text style={styles.components}>Job Title : </Text>
          <Text style={styles.components}>Location : </Text>
          <Text style={styles.components}>Experience : </Text>
          <Text style={styles.components}>Skills Required : </Text>
          <Text style={styles.components}>Must Have : </Text>
          <Text style={styles.components}>Nice to Have : </Text>
          <Text style={styles.components}>Responsibilities : </Text>
          <Text style={styles.components}>Qualification : </Text>
        </View>
        {/* After apply there should be one page .. for noe te navigation is login */}
        <View>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={[styles.singInButton, { backgroundColor: "#244A61" }]}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>
              {"APPLY"}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleMain: {
    width: 200 * 2,
    height: 150,
    backgroundColor: "#244A61",
    paddingTop: StatusBar.currentHeight,
  },
  rectangleTwo: {
    width: 50 * 2,
    height: 100,
    backgroundColor: "white",
    marginTop: "15%",
    marginLeft: "20%",
  },
  line: {
    width: 200 * 2,
    height: 1,
    backgroundColor: "#244A61",
    marginTop: "5%",
  },
  components: {
    ...sharedStyles.TextRegular,
    padding: 5,
  },
  singInButton: {
    borderRadius: 25,
    height: 40,
    width: 70,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: "10%",
  },

  buttonText: {
    ...sharedStyles.TextRegular,
    fontWeight: "bold",
  },
});
export default JobDescriptionScreen;
