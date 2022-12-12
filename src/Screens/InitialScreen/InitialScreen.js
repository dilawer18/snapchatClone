import React, { Component } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import BtnComp from '../../Components/BtnComp';
import imagePath from '../../constants/imagePath'
import strings from '../../constants/lang';
import NavigatonStrings from '../../constants/NavigatonStrings';
import colors from '../../styles/colors';
const InitialScreen = ({ navigation }) => {
    const moveToScreen = (screen) => () => {
        navigation.navigate(screen)
    }
    return (
        <ImageBackground style={styles.container} source={imagePath.bgImage}>
            <SafeAreaView>
                <BtnComp
                    btnText={strings.LOGIN}
                    onPress={moveToScreen(NavigatonStrings.LOGIN)}
                />
                <BtnComp
                    btnText={strings.SIGNUP}
                    btnStyle={{ backgroundColor: colors.blue }}
                    onPress={moveToScreen(NavigatonStrings.SIGNUP)}
                />
            </SafeAreaView>

        </ImageBackground>

    )
}
export default InitialScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },

})