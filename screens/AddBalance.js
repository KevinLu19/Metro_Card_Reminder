import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Style from "./Styles";


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
            <TouchableOpacity style = {Style.add_balance_button_frame}>
                <Text style = {Style.add_balance_save_text_button}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddBalance;