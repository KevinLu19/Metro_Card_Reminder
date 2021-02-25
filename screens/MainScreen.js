import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';

import {Button} from "react-native-paper";

import Style from "./Styles";

function calculating_card_balance(card_balance)
{
    let train_fare = 2.75;
    let sum_of_fare = card_balance - train_fare;

    if (sum_of_fare < 0)
    {
        console.log("Insufficient funds.");
    }
    else
    {
        set_remainder_card_swipes(remainder_card_swipes - 1);
    }
}

function MainScreen(props)
{
    const [card_balance, set_card_balance] = useState(0);
    const [remainder_card_swipes, set_remainder_card_swipes] = useState(0);

    return (
        <View style={Style.container}>
            <Image source={require("../assets/MetroCard.png")} style={Style.metro_card_image}></Image>
            <Text style={Style.card_balance}>Balance: ${card_balance}</Text>
            <Text style={Style.card_swipes_left}>{remainder_card_swipes} Swipes Left</Text>

            <TouchableOpacity style={Style.card_swiped}>
                <Text onPress={calculating_card_balance(card_balance)}>Subtract</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MainScreen;