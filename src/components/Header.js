import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native' 
import { colors } from 'react-native-elements';
import { color, parameters } from '../global/styles';
import { Icon } from 'react-native-elements';


export default function Header({title}) {

    return(
        <View style={styles.header}>
            <View style={{marginLeft: 20}}>
                {/* <Icon
                type="material-community"
                name= "arrow-left"
                color= {color.color1}
                size= {28}
                onPress={()=>{}}
                /> */}
                <Icon name="arrow-left" type="material-community" />
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: color.color2,
        height: parameters.headerHeight,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 22,
        marginLeft: 30,

    }
})