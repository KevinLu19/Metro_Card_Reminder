import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

function MainScreen(props)
{
    return (
        <View style={styles.container}>
            <Image source={require("../assets/MetroCard.png")} style={styles.metro_card_image}></Image>
            <Text style={styles.card_balance}>Balance: $</Text>
            <Text style={styles.card_swipes_left}># Swipes Left</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    },
    metro_card_image:
    {
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 400,
        resizeMode: "contain",
        left: "15%"
    },
    card_balance:
    {
        position: "relative",
        top: "120%",
        justifyContent: "center",
        fontSize: 25,
        textAlign: "center",
        color: "#7e1ce3"
    },
    card_swipes_left:
    {
        position: "relative",
        fontSize: 25,
        textAlign: "center",
        top: "130%",
        color: "#0a31f5"
    },
})

export default MainScreen;