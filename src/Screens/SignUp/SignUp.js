import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import BtnComp from '../../Components/BtnComp'
import HeaderComp from '../../Components/HeaderComp'
import TextinputWithLable from '../../Components/TextinputWithLable'
import WrapperContainer from '../../Components/WraperContainer'
import strings from '../../constants/lang'
import colors from '../../styles/colors'
import commonStyles from '../../styles/commonStyles'
import styles from './Styles'


const SignUp = () => {
    const [state, setState] = useState({
        isLoading: false,
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        isSecure: true
    })
    const { isLoading, email, password, isSecure, firstName, lastName, userName } = state
    const updateState = (data) => setState((state) => ({ ...state, ...data }))
    const onSignup = () => {
        alert("SignUp")
    }
    return (
        <WrapperContainer
            isLoading={isLoading}
        >
            <HeaderComp
                headerStyle={styles.headerStyle}
            />
            <Text style={styles.headingStyle}>{strings.CREATE_YOUR_ACCOUNT}</Text>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <TextinputWithLable
                        label={strings.FIRST_NAME}
                        placeholder={strings.ENTER_YOUR_FIRST_NAME}
                        value={firstName}
                        onChangeText={(firstName) => updateState({ firstName })}
                    />
                    <TextinputWithLable
                        label={strings.LAST_NAME}
                        value={lastName}
                        placeholder={strings.ENTER_YOUR_LAST_NAME}
                        onChangeText={(lastName) => updateState({ lastName })}
                    />
                    <TextinputWithLable
                        label={strings.USER_NAME}
                        placeholder={strings.ENTER_YOUR_USER_NAME}
                        value={userName}
                        onChangeText={(userName) => updateState({ useState })}
                    />
                    <TextinputWithLable
                        label={strings.USERNAME_OR_EMAIL}
                        placeholder={strings.USERNAME_OR_EMAIL}
                        value={firstName}
                        onChangeText={(email) => updateState({ email })}
                    />
                    <TextinputWithLable
                        label={strings.PASSWORD}
                        value={lastName}
                        placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD}
                        onChangeText={(password) => updateState({ password })}
                        secureTextEntry={isSecure}
                        isSecure={isSecure}
                        onPressSecure={() => updateState({ isSecure: !isSecure })}

                    />
                    <TouchableOpacity style={{ alignSelf: "center" }}>
                        <Text style={styles.textStyle}>
                            {strings.FORGOT_YOUR_PASSWORD}
                        </Text>
                    </TouchableOpacity>
                </View>
                <BtnComp
                    btnText={strings.SIGNUP_AND_ACCEPT}
                    btnStyle={styles.btnStyle}
                    textStyle={{ ...commonStyles.fontSize16, color: colors.white }}
                    onPress={onSignup}
                />
            </View>
        </WrapperContainer>
    )
}
export default SignUp
