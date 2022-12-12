import React from "react";
import NavigatonStrings from "../constants/NavigatonStrings";
import * as Screens from '../Screens'
export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={NavigatonStrings.INITIAL_SCREEN}
                component={Screens.InitialScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={NavigatonStrings.LOGIN}
                component={Screens.Login}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={NavigatonStrings.SIGNUP}
                component={Screens.SignUp}
                options={{ headerShown: false }} />
        </>
    )
}