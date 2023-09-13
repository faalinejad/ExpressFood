import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native' 
import { colors } from 'react-native-elements';
import { color, parameters } from '../global/styles';
import { Icon } from 'react-native-elements';


export default function Header({title, type}) {

    return(
        <View style={styles.header}>
            <View>
                <Icon
                type="material-comunity"
                name= {type}
                color= {color.color4}
                size={28}
                />
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
        backgroundColor: color.color4,
        height: parameters.headerHeight,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 22,
        marginLeft: 30,

    }
})