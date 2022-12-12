import React from "react";
import NavigatonStrings from "../constants/NavigatonStrings";
import * as Screens from '../Screens'
import TabRoutes from "./TabRoutes";
export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={NavigatonStrings.CHAT}
                component={TabRoutes}
                options={{ headerShown: false }} />
            {/* <Stack.Screen
                name={NavigatonStrings.CHAT}
                component={Screens.Chat}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={NavigatonStrings.CAMERA}
                component={Screens.Camera}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={NavigatonStrings.STORIES}
                component={Screens.Stories}
                options={{ headerShown: false }} /> */}
        </>
    )
}