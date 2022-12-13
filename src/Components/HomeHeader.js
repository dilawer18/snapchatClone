//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';

import { useNavigation } from '@react-navigation/native'
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import RoundImg from './RoundImg';

const HomeHeader = ({
    leftImg = imagePath.icBack,
    onPress,
    headerStyle,
    centerText,
    lastImg = imagePath.icMore,
    setting
}) => {
    const navigation = useNavigation()
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <RoundImg
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGhxuJtS2zDHXOib9lTMes3X5QZX3J-qQjA&usqp=CAU'
                />
                <Image style={{ marginLeft: moderateScale(16) }} source={imagePath.icSearch} />
            </View>
            <Text style={styles.textStyle}>{centerText}</Text>

            {!!setting ?
                <TouchableOpacity>
                    <Image source={setting} />
                </TouchableOpacity>
            : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ marginRight: moderateScale(16) }} source={imagePath.icAdd} />
                    <Image source={lastImg} />
                </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textStyle: {
        ...commonStyles.fontSize20,
        fontFamily: fontFamily.bold,
        // flex:1,

    }
});

export default HomeHeader;
