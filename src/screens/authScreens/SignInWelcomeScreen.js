import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Image} from 'react-native' 
import { color, parameters, title } from '../../global/styles';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function SignInWelcomeScreen (navigation) {

    return (
        <View style={{flex:1}}>
            <View style={{flex:3, justifyContent:"flex-start", alignItems:"center", paddingTop: 20}}>
                <Text style={{fontSize: 26, fontWeight:"bold", color: "#ff8c52"}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize: 26, fontWeight:"bold", color: "#ff8c52"}}>IN YOUR AREA</Text>
            </View>
            <View style={{flex:4, justifyContent: "center"}}>
            <Swiper autoplay={true}>
                <View style={styles.slide1}>
                    <Image
                        source={{uri: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}}
                        style={{height: "100%", width: "100%"}}
                    />
                </View>
                <View style={styles.slide2}>
                    <Image
                        source={{uri: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}}
                        style={{height: "100%", width: "100%"}}
                    />
                </View>
                <View style={styles.slide3}>
                    <Image
                        source={{uri: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}}
                        style={{height: "100%", width: "100%"}}
                    />
                </View>
                <View style={styles.slide3}>
                    <Image
                        source={{uri: "https://images.unsplash.com/photo-1533639781336-c2a9bb73a00a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"}}
                        style={{height: "100%", width: "100%"}}
                    />
                </View>
            </Swiper>
            </View>
            <View style={{flex:4, justifyContent: "flex-end", marginBottom: 20}}>
            <View style={{marginHorizontal: 20, marginTop:20}}>
                <Button
                title="SIGN IN"
                buttonStyle={parameters.styleButton}
                titleStyle={parameters.buttonTitle}
                onPress={() => {
                    navigation.navigate("SignInScreen")
                }}
                />
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 30}}>
                <Button
                    title= "Create an Account"
                    buttonStyle= {styles.createButton}
                    titleStyle= {styles.createButtonTitle}
                />
            </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    slide1:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#9DD6EB"

    },
    slide2:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#879cdf"

    },
    slide3:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#a2ebd7"

    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#86939e',
        height: 50,
        paddingHorizontal: 20
    },

    createButtonTitle: {
        color: "grey",
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -3,
    }
})