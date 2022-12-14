import React, { useEffect } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import HomeHeader from '../../Components/HomeHeader'
import RoundImg from '../../Components/RoundImg'
import WrapperContainer from '../../Components/WraperContainer'
import { data } from '../data'
import styles from './styles'

import imagePath from '../../constants/imagePath'
import actions from '../../redux/actions'
import { moderateScale } from '../../styles/responsiveSize'




const Chat = () => {

    useEffect(() => {
        apiHit()
    }, [])

    const apiHit = async () => {
        try {
            const headers = { 'aap-id': '60b3785ace6e48b83defce7' }
            const res = await actions.getUsers(`?limit=10`, headers)
            console.log("res+++++++++", res);

        } catch (error) {
            console.log(error, "error>>>>>");
        }
    }
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.flatStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RoundImg
                        image={item.img}
                        size={45}
                    />
                    <View style={{ marginLeft: moderateScale(16) }}>
                        <Text style={styles.nameStyle}>{item.name}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.newSnapStyle}>New Snap</Text>
                            <Text style={styles.timeStyle}>{item.time}</Text>
                            <Text style={styles.streakStyle}>{item.streak}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <RoundImg
                        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_mhsdTgqMYWXSUG2hDU0frkwTzzaM8LXDA&usqp=CAU'}
                        size={25}
                    />
                    <View style={styles.verticalLine} />
                    <Image source={imagePath.icChat} style={styles.chatStyle} />

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
                ItemSeparatorComponent={() => <View style={styles.lineStyle} />}
                showsVerticalScrollIndicator={false}
            // showsHorizontalScrollIndicator={false}
            />
        </WrapperContainer>
    )
}

export default Chat

