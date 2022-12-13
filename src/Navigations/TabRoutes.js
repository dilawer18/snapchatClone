import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import * as Screens from '../Screens'
import NavigatonStrings from '../constants/NavigatonStrings';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import { height } from '../styles/responsiveSize';
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
            tabBarOptions={{
                // style: { backgroundColor: "red"},
                showLabel: false,
            }}
            screenOptions={{
                tabBarStyle: { position: 'absolute', backgroundColor: colors.black },
                headerShown: false,
                tabBarVisible: false
            }}

        >
            <BottomTab.Screen
                name={NavigatonStrings.MAP}
                component={Screens.Map}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{ tintColor: focused ? colors.green : colors.white, height: 30, width: 30 }} source={imagePath.icLoc} />
                    }
                }}
            />
            <BottomTab.Screen
                name={NavigatonStrings.CHAT}
                component={Screens.Chat}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{ tintColor: focused ? colors.green : colors.white, height: 30, width: 30 }} source={imagePath.icChat} />
                    }
                }}
            />
            <BottomTab.Screen
                name={NavigatonStrings.CAMERA}
                component={Screens.Camera}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{ tintColor: focused ? colors.green : colors.white, height: 30, width: 30 }} source={imagePath.icCamera} />
                    }
                }}
            />
            <BottomTab.Screen
                name={NavigatonStrings.STORIES}
                component={Screens.Stories}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{ tintColor: focused ? colors.green : colors.white, height: 30, width: 30 }} source={imagePath.icPeople} />
                    }
                }}
            />

        </BottomTab.Navigator>
    )
}
export default TabRoutes;
