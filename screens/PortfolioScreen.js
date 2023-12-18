import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PortfolioScreen = ({ navigation }) => {
    return (
        <View style={styles.rectangleMain}>
            
            <View style={styles.rectangleTwo}><FontAwesomeIcon name="user" size={90} color="black" style={{alignSelf:'center'}} /></View>

            <View style={{flexDirection:'row'}}>
            <FontAwesomeIcon name="user" size={20}  style={{marginLeft:"20%", marginTop: "16%"}} />
            <Text style={{ fontSize: 20, marginTop: "15%", marginLeft: "5%" }}>Name</Text>
            </View>

            <View style={styles.line}></View>

            <View style={{flexDirection:'row'}}>
            <FontAwesomeIcon name="graduation-cap" size={20}  style={{marginLeft:"20%", marginTop: "6%"}} />
            <Text style={{ fontSize: 20, marginTop: "4%", marginLeft: "2%" }}>Qualification</Text>
            </View>

            <View style={styles.line}></View>

            <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="certificate" size={25}  style={{marginLeft:"20%", marginTop: "5%"}} />
            <Text style={{ fontSize: 20, marginTop: "4%", marginLeft: "2%"  }}>Certification</Text>
            </View>

            <View style={styles.line}></View>

            <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="ballot" size={25}  style={{marginLeft:"20%", marginTop: "5%"}} />
            <Text style={{ fontSize: 20, marginTop: "4%", marginLeft: "2%" }}>My Application</Text>
            </View>

            <View style={styles.line}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    rectangleMain: {
        width: 200 * 2,
        height: 250,
        backgroundColor: '#244A61',
        paddingTop: StatusBar.currentHeight,
    },
    rectangleTwo: {
        width: 150 * 2,
        height: 200,
        backgroundColor: 'white',
        alignSelf:'center',
        borderRadius: 20,
        marginTop:"30%",
    },
    line: {
        width: 150 * 2,
        height: 1,
        backgroundColor: '#244A61',
        marginLeft: "15%",
    },
});

export default PortfolioScreen;