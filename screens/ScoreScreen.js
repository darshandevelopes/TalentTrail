import React from "react";
import { View, StyleSheet, StatusBar, Pressable, Text, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const ScoreScreen = ({ navigation }) => {
    return (
        <View>
            <View style={styles.mainReactangle}>
                <Pressable
                    onPress={() => navigation.navigate("TestFront")}
                    style={{ marginLeft: "3%", marginTop: "3%" }}
                >
                <AntDesign name="leftcircleo" size={20} color="white" />
                </Pressable>
                <AntDesign name="checkcircleo" size={28} color="white" style={{ alignSelf: 'center', marginLeft: "20%", marginTop: "10%" }} />
                <Text style={styles.text}>Your Score</Text>
                <Pressable
                    onPress={() => navigation.navigate("Home")}
                    style={{ marginLeft: "13%", marginTop: "3%" }}
                >
                    <MaterialIcons name="house" size={24} color="white"  />
                </Pressable>

            </View>
            <ScrollView style={{ marginBottom: "40%" }}>
                <View style={styles.subReactangle}>
                    <Text style={styles.textOne}>Quantitative Aptitude :</Text>
                    <Text style={styles.textTwo}>Total Marks : 50</Text>
                    <Text style={styles.textThree}>Marks Scored : 50</Text>
                    <View style={styles.rectangleScore}></View>
                </View>

                <View style={styles.subReactangle}>
                    <Text style={styles.textOne}>Hexaware Test 1 :</Text>
                    <Text style={styles.textTwo}>Total Marks : 50</Text>
                    <Text style={styles.textThree}>Marks Scored : 30</Text>
                    <View style={styles.rectangleScore}></View>
                </View>
                <View style={styles.subReactangle}>
                    <Text style={styles.textOne}>Technical (Coding) :</Text>
                    <Text style={styles.textTwo}>Total Marks : 50</Text>
                    <Text style={styles.textThree}>Marks Scored : 40</Text>
                    <View style={styles.rectangleScore}></View>
                </View>
                <View style={styles.subReactangle}></View>
                <View style={styles.subReactangle}></View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    mainReactangle: {
        height: 130,
        backgroundColor: '#244A61',
        paddingTop: StatusBar.currentHeight,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginLeft: "5%",
        marginTop: "10%"
    },
    textOne: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: "5%",
        marginLeft: "5%"
    },
    textTwo: {
        fontSize: 20,
        marginTop: "5%",
        marginLeft: "5%"
    },
    textThree: {
        fontSize: 20,
        marginLeft: "5%"
    },
    subReactangle: {
        height: 170,
        width: 300,
        backgroundColor: 'white',
        marginTop: "10%",
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: 'grey',
        elevation: 10,
    },
    rectangleScore: {
        height: 10,
        backgroundColor: '#244A61',
        alignSelf: 'center',
        width: 250,
        marginTop: "8%",
        borderRadius: 10
    },
});

export default ScoreScreen;
