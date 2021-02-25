import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {Button} from "react-native-paper";

import Style from "./Styles";

function button_handler()
{
    console.log("Temporary stuff");
}

function AddBalance(props)
{
    const [total_balance, set_total_balance] = useState(0);

    return (
        <View>
            <Text style={Style.add_balance_display_balance}>${total_balance}</Text>
            <TextInput
                style = {Style.add_balance_text_input}
                placeholder = "Enter Added Balance"
                keyboardType = "numeric"
                textAlign = {"center"}
                onChangeText = {total_balance => set_total_balance(total_balance)}
            />
            <Button style = {Style.add_balance_save_text_button} onPress = {button_handler}>Save</Button>
        </View>
    );
}

export default AddBalance;