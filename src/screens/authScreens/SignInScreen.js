import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native' 
import { color, parameters, title } from '../../global/styles';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Header from '../../components/Header';

export default function SignInScreen () {

    const textInput1= useRef(1)
    const textInput2= useRef(2)

    return(
        <View style={styles.container}>
            <Header title={"MY ACCOUNT"} type={"arrow-left"}/>
            <View  style={{marginLeft: 20, marginTop:10}}>
                <Text style={title}>Sign-In</Text>
            </View>
            <View style={{alignItems:"center", marginTop: 10}}>
                <Text style={styles.text1}>Please enter the email and password</Text>
                <Text style={styles.text1}>Registered with your account</Text>
            </View>
            <View style={{marginTop:20}}>
                <View>
                <TextInput 
                    style={styles.TextInput1}
                    placeholder="Email"
                    ref= {textInput1}
                />
                </View>
                <View>
                <TextInput 
                    style={styles.TextInput2}
                    placeholder="Password"
                    ref= {textInput2}
                />
                </View>
            </View>
            <View style={{marginHorizontal: 20, marginTop:20}}>
                <Button
                title="SIGN IN"
                buttonStyle={parameters.styleButton}
                titleStyle={parameters.buttonTitle}
                />
            </View>
            <View style={{alignItems:"center", marginTop:20}}>
                <Text style={{...styles.text1, textDecorationLine: "underline"}}>Forget Password?</Text>
            </View>
            <View style={{alignItems: "center", marginTop: 10, marginBottom:20}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Or</Text>
            </View>
            <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon
                    title= "Sign In With Facebook"
                    type="facebook"
                    style={styles.SocialIcon}
                    button
                    onPress ={() => {}}
                />
            </View>
            <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon
                    title= "Sign In With Google"
                    type="google"
                    style={styles.SocialIcon}
                    button
                    onPress ={() => {}}
                />
            </View>
            <View style={{marginLeft: 20, marginTop:20}}>
                <Text style={{...styles.text1}}>New on XpressFood?</Text>
            </View>
            <View style={{alignItems: "flex-end", marginHorizontal: 20}}>
                <Button
                    title= "Create an Account"
                    buttonStyle= {styles.createButton}
                    titleStyle= {styles.createButtonTitle}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1
    },

    text1: {
        color: "#808080",
        fontSize: 16,

    },

    TextInput1:{
        borderWidth:1,
        borderColor: '#86939e',
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15
    },

    TextInput2:{
        borderWidth:1,
        borderColor: '#86939e',
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft:15
    },

    SocialIcon: {
        borderRadius: 12,
        height: 50
    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#86939e',
        height: 40,
        paddingHorizontal: 20
    },

    createButtonTitle: {
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -3,
    }
})