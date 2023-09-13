import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthSack from './authNavigators'



export default function RootNavigator() {

    return(

        <NavigationContainer>
            <AuthSack />
        </NavigationContainer>
    )
}