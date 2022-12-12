import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../styles/colors'
import commonStyles from '../styles/commonStyles'
import { moderateScale } from '../styles/responsiveSize'

const BtnComp = ({
    btnText,
    onPress,
    btnStyle,
    textStyle,
    isDisable = false
}) => {
    return (
        <View>
            <TouchableOpacity
                style={{ ...styles.btnStyle, ...btnStyle }}
                onPress={onPress}
                activeOpacity={0.8}
                disabled={isDisable}
            >
                <Text style={{ ...styles.textStyle, ...textStyle }}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BtnComp
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    btnStyle: {
        backgroundColor: colors.red,
        height: moderateScale(72),
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 8
    },
    textStyle: {
        ...commonStyles.fontSize24
    }
})