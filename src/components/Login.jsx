import React from "react";
import { View, Image, Text } from "react-native";
import { Button } from "react-native-paper";


export default props => {


    return (
        <View style={{flex: 1, backgroundColor: '#00CED1' }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 30
            }}>Unforgotten Experiences</Text>
            <Text style={{
                 textAlign: 'center',
                 fontSize: 20,
                 fontWeight: '200',
                 color: 'white',
                 opacity: 7,
                 marginTop: 35
            }}> Book your with us we have many packages to explore the world</Text>
            <Image source={require ('../imagens/parque.png')} resizeMode="contain" style={{
                left: 45,
                marginTop: 60,
            
            }}/>
            <Button style={{
                margin: 50,
                padding: 10,
                backgroundColor: '#DDA0DD',
                marginTop: -120,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#EE82EE'
                
            }} textColor="white" onPress={() => props.navigation.navigate('Home')}>
                ir
            </Button>
        </View>
    )
}