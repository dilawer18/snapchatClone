import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from '../styles/responsiveSize'
import colors from '../styles/colors'


const HeaderComp = ({
    leftImage = imagePath.icBack,
    onPress,
    headerStyle
}) => {
    const navigation = useNavigation()
    return (
        <View style={{ ...headerStyle, ...headerStyle }}>
            <TouchableOpacity
                onPress={!!onPress ? onPress : () => navigation.goBack()}>
                <Image style={{ tintColor: colors.blue }} source={leftImage} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComp

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),

    }
})