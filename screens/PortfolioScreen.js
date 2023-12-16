import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
const PortfolioScreen = ({ navigation }) => {
    return (
        <View style={styles.rectangleMain}>
            <View style={styles.rectangleTwo}></View>
            <Text style={{ fontSize: 20, marginTop: 60, marginLeft: 110 }}>Name</Text>
            <View style={styles.line}></View>
            <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 110 }}>Qualification</Text>
            <View style={styles.line}></View>
            <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 110 }}>Certification</Text>
            <View style={styles.line}></View>
            <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 110 }}>My Application</Text>
            <View style={styles.line}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    rectangleMain: {
        width: 200 * 2,
        height: 250,
        backgroundColor: '#244A61',
    },
    rectangleTwo: {
        width: 150 * 2,
        height: 200,
        backgroundColor: 'white',
        marginTop: 150,
        marginLeft: 45,
        borderRadius: 20,
    },
    line: {
        width: 150 * 2,
        height: 1,
        backgroundColor: '#244A61',
        marginLeft: 50,
        marginTop: 4
    },
    component: {
    },
});

export default PortfolioScreen;