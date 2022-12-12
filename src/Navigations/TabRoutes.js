import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import * as Screens from '../Screens'
import NavigatonStrings from '../constants/NavigatonStrings';


const BottomTab = createBottomTabNavigator();
const TabRoutes = () => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={NavigatonStrings.CHAT}
            tabBarOptions={{ showLabel: false }}
        >
            <BottomTab.Screen
                name={NavigatonStrings.CHAT}
                component={Screens.Chat}
                options={{}}
            />
            <BottomTab.Screen
                name={NavigatonStrings.MAP}
                component={Screens.Map}
                options={{}}
            />
            <BottomTab.Screen
                name={NavigatonStrings.CAMERA}
                component={Screens.Camera}
                options={{}}
            />
            <BottomTab.Screen
                name={NavigatonStrings.STORIES}
                component={Screens.Stories}
                options={{}}
            />

        </BottomTab.Navigator>
    )
}
export default TabRoutes;
