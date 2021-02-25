import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Style from "./Styles";

function About(props) {
    return (
        <ScrollView>
            <Text style = {Style.about_screen_motivation}>Motivation</Text>
            <Text style = {Style.about_screen_body_text}>
                The reason why this mobile application was created was because as a New Yorker, there were times where
                I haven't ride the public transportation in a while for whatever reason and I would often forget the total amount of money that
                was in my card. This application was inspired from this conundrum.
            </Text>

            <Text style = {Style.about_screen_explainiation}>How This App Works</Text>
            <Text style = {Style.about_screen_function}>
                The fact that it would remind you on how much money is left
                in the card plus the added feature of how many swipes left before you decide to add money into the card. The only caveat to
                this mobile application is the fact that the person has to micro manage each swipe via pressing the minus button to decrease
                the swipe count. Whenever the person decides to add money into the card, the user would have to also enter that as well.
                The reason for this is because this application would be near impossible as this application would require the MTA API to
                even function and that is assuming they have the option within their API.
            </Text>
        </ScrollView>
    );
}

export default About;