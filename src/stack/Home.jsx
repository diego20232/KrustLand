import React from "react";
import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaInical from "../views/TelaInical";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from "../components/Login";



const Tab = createBottomTabNavigator();
const Icon = createMaterialBottomTabNavigator();


export default props => {

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login}  options={{
                    headerShown: false,
                    tabBarActiveTintColor: 'black',

                    tabBarInactiveTintColor: '#D3D3D3',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="login" color={color} size={30} style={{ marginTop: -1, left: -2 }} />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#00CED1',

                    },
                }}  />

<Tab.Screen name="Home" component={TelaInical}  options={{
                    headerShown: false,
                    tabBarActiveTintColor: 'black',

                    tabBarInactiveTintColor: '#D3D3D3',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-search" color={color} size={30} style={{ marginTop: -1, left: -2 }} />
                    ),
                    tabBarStyle: {
                        backgroundColor: 'white',

                    },
                }}  />


            </Tab.Navigator>

        </View>
    )
}