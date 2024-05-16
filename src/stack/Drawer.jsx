import React from "react";
import { SafeAreaView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { ReanimatedKeyframe } from "react-native-reanimated/lib/typescript/reanimated2/layoutReanimation/animationBuilder/Keyframe";
import Home from "./Home";
import TelaInical from "../views/TelaInical";


const Drawer = createDrawerNavigator();


export default props => {

    return (
        <NavigationContainer>
            <Drawer.Navigator>
            
                <Drawer.Screen name="tela" component={TelaInical} options={{
                    headerStyle: {
                      
                    },
                    headerBackground: false
                }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}