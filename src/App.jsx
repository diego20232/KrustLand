import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './stack/Home';
import Drawer from './stack/Drawer';

const Stack = createNativeStackNavigator();


export default props => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{
                    headerStyle: {
                        backgroundColor: '#00CED1',
                    }, 
                    headerTitle: '',
                    headerShown: false
                
                }} />
                <Stack.Screen name='Login' component={Login} options={{
                    headerStyle: {
                    backgroundColor: 'black',
                    },
                    headerTitle: '',
                    
                    
                }} />
                

            </Stack.Navigator>

        </NavigationContainer>
    )
}




