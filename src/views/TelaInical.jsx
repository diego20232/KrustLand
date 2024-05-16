import React from "react";
import { View, Image, Pressable } from "react-native";
import { Text } from "react-native-paper";
import { FlatList } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import info from "../data/info";
import { ThemeProvider } from "react-native-paper";
import { ScrollView } from "react-native";



export default props => {

    function getUserItem({ item: infos }) {
        return (
          
            <ThemeProvider>
                <ListItem style={{
                    flexDirection: 'column',
                    backgroundColor: '#C0C0C0',
                    padding: 10,
                    margin: 10,
                    borderRadius: 10
                }}>
                    <Avatar source={{ uri: infos.imageURL }} />
                    <ListItem.Content style={{

                    }}>
                        <ListItem.Title style={{

                        }}>{infos.name}</ListItem.Title>
                    </ListItem.Content>


                </ListItem>
            </ThemeProvider>
           

        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <Text style={{
                fontWeight: '900',
                fontSize: 20,
                left: 20,
                marginTop: 20
            }}>
                Welcome Back!
            </Text>
            <Text style={{
                fontWeight: '100',
                fontSize: 15,
                left: 22,
                marginTop: -2
            }}>
                Soenemis Sullvan
            </Text>
            <Image source={require('../imagens/login.png')} style={{
                left: 350,
                marginTop: -50

            }} />

            <View style={{
                backgroundColor: '#A9A9A9',
                borderRadius: 20,
                height: 250,
                margin: 30
            }}>
                <Image source={require('../imagens/tech.png')} resizeMode="center" style={{
                    right: 120,
                    marginTop: -120
                }} />

                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontFamily: 'italic',
                    marginTop: -220,
                    left: 180,
                    color: '#00CED1',
                    flexDirection: 'row'
                }}>Find tourist locations </Text>

                <Text style={{
                    left: 190,
                    marginTop: 5,
                    fontWeight: '200',
                    color: 'white'

                }}>Promo Packages for tourist

                </Text>
                <Image source={require('../imagens/casual.png')} resizeMode="center" style={{
                    marginTop: -5
                }} />
            </View>
<ScrollView>
            <View>
                <Pressable>
                    <FlatList
                        keyExtractor={infos => infos.id.toString()}
                        data={info}
                        renderItem={getUserItem}
                    />
                </Pressable>
            </View>
            </ScrollView>





        </View>


    )
}