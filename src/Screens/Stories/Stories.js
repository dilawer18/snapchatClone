//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
//constants
import imagePath from '../../constants/imagePath';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import styles from './styles';
import actions from '../../redux/actions';

//reusable components
import HomeHeader from '../../Components/HomeHeader';
import RoundImg from '../../Components/RoundImg';

// import { data } from '../../constants/data';
import commonStyles from '../../styles/commonStyles';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import WrapperContainer from '../../Components/WraperContainer';
// import { data } from '../data';


const Stories = () => {
    const [state, setState] = useState({
        isLoading: false,
        data: [],
    })
    useEffect(() => {
        apiHit()
    }, [])

    const { isLoading, isRefresh, data, page, loadeMore } = state
    const updateState = (data) => setState((state) => ({ ...state, ...data }))




    const apiHit = async (val, page = 0, loadeMore = false) => {
        try {
            const headers = { 'app-id': '60b3785ace6e48b83d6efce7' }
            const res = await actions.getUsers(`?limit=10&page=${page}`, headers)
            console.log("api res==<<<<", res)
            updateState({
                data: [...data, ...res.products],

            })

        } catch (error) {
            console.log('error raised', error)
            updateState({ isLoading: false })
        }
    }

    const renderStories = ({ item, index }) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <RoundImg
                    image={item.images[0]}
                    size={80}
                />
                <Text style={styles.nameStyle} >{item.brand}</Text>
            </View>
        )
    }

    const renderQuickAdd = ({ item, index }) => {
        return (
            <View style={styles.quickStyle}>

                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <RoundImg
                        image={item.images[0]}
                        size={50}
                    />
                    <View style={{ marginLeft: moderateScale(8) }}>
                        <Text>{item.brand}</Text>
                        <Text>Recently Joined</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.btnStyle}
                    >
                        <Text>+Add</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ marginLeft: moderateScale(8) }}>
                        <Image source={imagePath.icClose} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderSubcription = ({ item, index }) => {
        return (
            <ImageBackground
                source={{ uri: item.images[0] }}
                borderRadius={8}
                style={styles.subscriptionView}
            >
                <View>
                    <Text style={{ ...styles.nameStyle, color: colors.white }}>{item.brand}</Text>
                    <Text style={{ ...commonStyles.fontSize12, color: colors.white }}>Mon</Text>
                </View>
            </ImageBackground>
        )
    }

    const renderDiscover = ({ item, index }) => {
        return (
            <ImageBackground
                source={{ uri: item.images[0] }}
                borderRadius={8}
                style={styles.discoverStyle}
            >
                <View>
                    <Text style={{ ...styles.nameStyle, color: colors.white }}>{item.name}</Text>
                    <Text style={{ ...commonStyles.fontSize12, color: colors.white }}>Mon</Text>
                </View>
            </ImageBackground>
        )
    }
    return (
        <WrapperContainer style={{ padding: 0 }} isLoading={isLoading}>
            <HomeHeader headerStyle={{ paddingHorizontal: moderateScale(24) }} centerText={strings.STORIES} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <Text style={styles.headerStyle}>{strings.FRIENDS}</Text>
                <View style={{}}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        renderItem={renderStories}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginLeft: moderateScale(16) }} />}
                        ListHeaderComponent={() => <View style={{ marginLeft: moderateScale(24) }} />}
                        ListFooterComponent={() => <View style={{ marginRight: moderateScale(24) }} />}
                    />
                </View>
                <View style={{ marginTop: moderateScaleVertical(16) }}>
                    <Text style={styles.headerStyle}>{strings.QUICK_ADD}</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        renderItem={renderQuickAdd}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginLeft: moderateScale(16) }} />}
                        ListHeaderComponent={() => <View style={{ marginLeft: moderateScale(24) }} />}
                        ListFooterComponent={() => <View style={{ marginRight: moderateScale(24) }} />}
                    />
                </View>

                <View style={{ marginTop: moderateScaleVertical(16) }}>
                    <Text style={styles.headerStyle}>{strings.SUBSCRIPTION}</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        renderItem={renderSubcription}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginLeft: moderateScale(16) }} />}
                        ListHeaderComponent={() => <View style={{ marginLeft: moderateScale(24) }} />}
                        ListFooterComponent={() => <View style={{ marginRight: moderateScale(24) }} />}
                    />
                </View>

                <View style={{ margin: moderateScaleVertical(16) }}>
                    <Text style={styles.headerStyle}>{strings.DISCOVER}</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={data}
                        renderItem={renderDiscover}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginBottom: moderateScale(8) }} />}

                    />
                </View>
            </ScrollView>
        </WrapperContainer>
    );
};


export default Stories;