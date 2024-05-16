import React from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default props => {


    return (
        <View style={{
            backgroundColor: '#DB7093',
            flex: 1
        }}>
            <Image source={require('../imagens/glassy.png')} resizeMode="center" style={{
                left: 20,
                marginTop: -90
            }} />
            <View>
                <TextInput placeholder="insira seu email" style={{
                    margin: 50,
                    backgroundColor: '#FFF5EE',
                    marginTop: -80,
                    borderRadius: 5,
                    borderCurve: 90,
                    borderWidth: 0,

                }} />
                <TextInput placeholder="insira sua senha" style={{
                    margin: 50,
                    backgroundColor: '#FFF5EE',
                    marginTop: -20,
                    borderRadius: 5,
                    borderCurve: 90,
                    borderWidth: 0,
                }} secureTextEntry />

                <View>
                    <Button style={{
                        padding: 5,
                        backgroundColor: 'white',
                        margin: 150,
                        marginTop: -15,
                        right: 80

                    }} onPress={() => props.navigation.navigate('Login')}>Sair</Button>

                    <Button style={{
                        padding: 5,
                        backgroundColor: 'white',
                        margin: 150,
                        marginTop: -198,
                        left: 60

                    }} onPress={() => props.navigation.navigate('home')}>Entrar</Button>
                </View>
            </View>
        </View>
    )
}