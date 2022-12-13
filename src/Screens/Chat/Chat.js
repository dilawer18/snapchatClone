import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WraperContainer'
import HomeHeader from '../../Components/HomeHeader'
import { data } from '../data'
import Styles from './Styles'
import RoundImg from '../../Components/RoundImg'

import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import imagePath from '../../constants/imagePath'

const Chat = () => {
    const renderItem = ({ item, index }) => {
        return (
            <View style={Styles.flatStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RoundImg
                        image={item.img}
                        size={45}
                    />
                    <View style={{ marginLeft: moderateScale(16) }}>
                        <Text style={Styles.nameStyle}>{item.name}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={Styles.newSnapStyle}>New Snap</Text>
                            <Text style={Styles.timeStyle}>{item.time}</Text>
                            <Text style={Styles.streakStyle}>{item.streak}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <RoundImg
                        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_mhsdTgqMYWXSUG2hDU0frkwTzzaM8LXDA&usqp=CAU'}
                        size={25}
                    />
                    <View style={Styles.verticalLine} />
                    <Image source={imagePath.icChat} style={Styles.chatStyle} />

                </View>
            </View>
        )

    }
    return (
        <WrapperContainer>
            <HomeHeader
                centerText='Chat' />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={() => <View style={Styles.lineStyle} />}
                showsVerticalScrollIndicator={false}
            // showsHorizontalScrollIndicator={false}
            />
        </WrapperContainer>
    )
}

export default Chat

const styles = StyleSheet.create({})