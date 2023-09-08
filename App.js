import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native' 
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header';
import { color, parameters } from './src/global/styles';

export default function App() {

  return(
    <View styles= {styles.container}>
      <StatusBar
        barStyle= "light-content"
        backgroundColor= {color.statusbar}

      />
      <Header title={"MY $$$ ACCOUNT"}/>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})
