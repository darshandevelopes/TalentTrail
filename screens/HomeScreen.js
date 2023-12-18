import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.ellipse}></View>
      <View style={styles.search}>
        <TextInput placeholder="Search Something"></TextInput>
        <FontAwesomeIcon name="search" size={30} color="black" style={{}} />
      </View>
      <ScrollView horizontal={true} style={styles.slider}>
        <View style={[styles.Slidercard]}>
          <Text style={styles.sliderContent}>Scroll</Text>
        </View>
        <View style={[styles.Slidercard]}>
          <Text style={styles.sliderContent}>ON</Text>
        </View>
        <View style={[styles.Slidercard]}>
          <Text style={styles.sliderContent}>Me</Text>
        </View>
        <View style={[styles.Slidercard]}>
          <Text style={styles.sliderContent}>to</Text>
        </View>
        <View style={[styles.Slidercard]}>
          <Text style={styles.sliderContent}>Get</Text>
        </View>
        <View style={[styles.Slidercard]}>
          <Text style={styles.sliderContent}>slider</Text>
        </View>
        <View style={[styles.Slidercard]}>
          <Text style={styles.sliderContent}>View</Text>
        </View>
      </ScrollView>
      <View style={styles.container}>
      <View style={[{top:-90},styles.row]}>
        <View style={styles.card}>
          <Text>Card 6
          </Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <Text>Card 3</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 4</Text>
        </View>
      </View>
     </View>

  
      

     
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  slider: {
    height: 200,
    width: "85%",
    backgroundColor: "white",
    marginHorizontal: 30,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    top: -100,
  },
  search: {
    padding: 10,
    flexDirection: "row",
    width: "70%",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    top: -110,
    marginLeft: 35,
  },
  Slidercard: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    width: 300,
    margin: 20,
    backgroundColor: "yellow",
  },
  sliderContent: {
    fontWeight: "bold",
    fontSize: 20,
  },
  ellipse: {
    height: 150,
    width: "100%",
    backgroundColor: "#244A61",
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  card: {
    flex: 1,
    height: 100,
    width:50,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin:20
  },
});
export default HomeScreen;
