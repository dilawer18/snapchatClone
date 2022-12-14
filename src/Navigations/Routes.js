import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux'
import { getData } from '../utils/utils';


const Stack = createStackNavigator();
export default function Routes() {
    getData();
    const isLogin = useSelector((state) => state.auth.isLogin)
    console.log(isLogin, "isLogin>>>>>");
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* {AuthStack(Stack)} */}
                {isLogin ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}