import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import fontFamily from "../../styles/fontFamily";
import { moderateScale, moderateScaleVertical } from "../../styles/responsiveSize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(24)
    },
    textStyle: {
        ...commonStyles.fontSize12,
        color: colors.blue
    },
    btnStyle: {
        borderRadius: moderateScale(54),
        height: moderateScale(48),
        backgroundColor: colors.blackOpacity20,
        marginHorizontal: moderateScale(50)
    },
    headerStyle: {
        marginBottom: moderateScaleVertical(10)
    },
    headingStyle: {
        ...commonStyles.fontSize14,
        fontFamily: fontFamily.medium,
        alignSelf: 'center',
        marginBottom: moderateScaleVertical(34)
    }


})
export default styles;