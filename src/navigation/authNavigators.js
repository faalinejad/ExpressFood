import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';



const Auth = createStackNavigator();

export default function AuthSack () {

    return(
        <Auth.Navigator>
            <Auth.Screen
                name= "SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                option= {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name= "SignInScreen"
                component={SignInScreen}
                option= {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Auth.Navigator>
    )
}