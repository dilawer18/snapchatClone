import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import BtnComp from '../../Components/BtnComp'
import HeaderComp from '../../Components/HeaderComp'
import TextinputWithLable from '../../Components/TextinputWithLable'
import WrapperContainer from '../../Components/WraperContainer'
import strings from '../../constants/lang'
import colors from '../../styles/colors'
import commonStyles from '../../styles/commonStyles'
import styles from './Styles'
styles

const Login = () => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
    isEnabled: true
  })
  const { isLoading, email, password, isSecure, isEnabled } = state
  const updateState = (data) => setState((state) => ({ ...state, ...data }))
  useEffect(() => {
    if (email !== '' && password !== '') {
      updateState({ isEnabled: true })
      return;
    }
    updateState({ isEnabled: false })

  }, [email, password])
  const onLogin = () => {
    alert("hay")
  }
  return (
    <WrapperContainer
      isLoading={isLoading}
    >
      <HeaderComp
        headerStyle={styles.headerStyle}
      />
      <Text style={styles.headingStyle}>{strings.LOGIN}</Text>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <TextinputWithLable
            label={strings.USERNAME_OR_EMAIL}
            placeholder={strings.PLEASE_ENTER_YOUR_EMAIL}
            value={email}
            onChangeText={(email) => updateState({ email })}
          />
          <TextinputWithLable
            label={strings.PASSWORD}
            value={password}
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
          isDisable={!isEnabled}
          btnText={strings.LOGIN}
          btnStyle={{ ...styles.btnStyle, backgroundColor: isEnabled ? colors.blue : colors.blackOpacity20 }}
          textStyle={{ ...commonStyles.fontSize16, color: colors.white }}
          onPress={onLogin}
        />
      </View>
    </WrapperContainer>
  )
}
export default Login
