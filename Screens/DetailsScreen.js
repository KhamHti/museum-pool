import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InformationPage from "./InformationPage";
import Explore from "./Explore";
import places from "../consts/places";

const DetailsScreen = ({navigation}) => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarStyle: {backgroundColor: "#DDBEAA", paddingTop: 30}
            }} >
            <Tab.Screen name="InformationPage" component={InformationPage} />
            <Tab.Screen name="Explore" component={Explore} />
        </Tab.Navigator>
    );
};

export default DetailsScreen;