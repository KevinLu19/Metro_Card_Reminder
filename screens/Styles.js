import {StyleSheet} from "react-native";

// Created a separate file for StyleSheet. Makes it more cleaner to read.

var Style = StyleSheet.create({
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
    card_swiped:
    {
        width: 100,
        backgroundColor: "#2d88d2",
        alignItems: "center",
        padding: 20,
        borderRadius: 10/2,
        justifyContent: "center",
        position: "relative",
        left: "37%",

    },
    add_balance_display_balance:
    {
        position: "relative",
        paddingBottom: 50,
        justifyContent: "center",
        fontSize: 45,
        textAlign: "center",
        color: "#00c9ff",
        left: "0%"
    },
    add_balance_text_input:
    {
        position: "relative",
        fontSize: 30,
        paddingBottom: 100
    },
    add_balance_save_text_button:
    {
        position: "relative",
        fontSize: 25,
        left: "50%"
    },
})

export default Style;