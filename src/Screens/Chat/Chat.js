import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import HomeHeader from '../../Components/HomeHeader'
import RoundImg from '../../Components/RoundImg'
import WrapperContainer from '../../Components/WraperContainer'
// import { data } from '../data'

import imagePath from '../../constants/imagePath'
import actions from '../../redux/actions'
import { moderateScale } from '../../styles/responsiveSize'
import styles from './styles'

const Chat = () => {
    const [state, setState] = useState({
        isLoading: false,
        isRefresh: false,
        loadeMore: false,
        data: [],
        page: 0
    })
    const { isLoading, isRefresh, data, page, loadeMore } = state

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    useEffect(() => {
        apiHit(true, page)
    }, [])


    const apiHit = async (val, page = 0, loadeMore = false) => {

        if (loadeMore) {
            updateState({ loadeMore: true })
        }
        if (val) {
            updateState({ isLoading: true })
        }

        else {
            updateState({ isRefresh: true })
        }

        try {
            const headers = { 'app-id': '60b3785ace6e48b83d6efce7' }
            const res = await actions.getUsers(`?limit=10&page=${page}`, headers)
            console.log("api res==<<<<", res)
            updateState({
                data: [...data, ...res.products],
                isLoading: false,
                isRefresh: false,
                // page: page + 1,
                loadeMore: false
            })

        } catch (error) {
            console.log('error raised', error)
            updateState({ isLoading: false })
        }
    }
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.flatStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RoundImg
                        image={item.images[0]}
                        size={45}
                    />
                    <View style={{ marginLeft: moderateScale(16) }}>
                        <Text style={styles.nameStyle}>{item.brand}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.newSnapStyle}>New Snap</Text>
                            <Text style={styles.timeStyle}>{item.price}</Text>
                            <Text style={styles.streakStyle}>{item.price}</Text>
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

