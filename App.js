import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native' 
import { color, parameters } from './src/global/styles'
import SignInScreen from "./src/screens/authScreens/SignInScreen"
import Header from './src/components/Header'
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen'
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {

  return(
    <View style= {styles.container}>

      <StatusBar   
        barStyle= "light-content"
        backgroundColor= {color.statusbar}
      />
      
      <SignInWelcomeScreen/>
      {/* <RootNavigator/> */}

      
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})
