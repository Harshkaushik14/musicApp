import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Color } from '../styles/Color';
import { FontSize } from '../styles/Fontsize';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const HomeScreen = () => {
    const navigation = useNavigation();
    const [musicData, setMusicData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        let url = "https://itunes.apple.com/search?term=Justin+beiber";
        try {
            setisLoading(true);
            const response = await axios.get(url);
            if (response.status == 200) {
                setMusicData(response.data.results);
                // console.log("response at fetchData ", response.data.results);
                setisLoading(false);
            } else {
                console.log("Looks like something went wrong! status code =>", response.status)
                setisLoading(false);
            }
        } catch (error) {
            setError(error);
            console.log("error at fetchData ", error);
            setisLoading(false);
        }
    };


    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.navigate("MusicDetails", {
            musicDetails: musicData[index],
            index: index,
        })} style={styles.tabStyle}>
            <Image resizeMode="cover" style={styles.trackImage} source={{ uri: item.artworkUrl100 }} />
            <View style={styles.tabContainerStyle}>
                <Text style={styles.trackNameText}>{item.trackName}</Text>
                <Text style={styles.trackArtistText}>{item.artistName}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderLoader = () => (
        <View style={styles.loaderContainerStyle}>
            <ActivityIndicator color={Color.WHITE} size={30} />
            <Text style={styles.lodingText}>Loading...</Text>
        </View>
    )


    const renderHeader = () => (
        <View style={{ margin: 15 }}>
            <Text style={styles.mainText}>Your Weekly Music Mix </Text>
        </View>
    )



    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                animated={true}
                backgroundColor={Color.BACKGROUND_COLOR}
                barStyle="default" />

            <FlatList
                ListHeaderComponent={renderHeader}
                data={musicData}
                renderItem={renderItem}
                ListEmptyComponent={renderLoader}
            />


        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Color.BACKGROUND_COLOR,
        height: ScreenHeight,
        width: ScreenWidth
    },
    mainText: {
        color: Color.WHITE,
        fontSize: FontSize.LARGEST,
        fontWeight: "bold",
        width: ScreenWidth / 2,
        marginTop: 15
    },
    tabStyle: {
        flexDirection: "row",
        margin: 15,
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 6
    },
    trackImage: {
        borderRadius: 6,
        height: ScreenHeight / 8,
        width: ScreenWidth / 3,
    },
    tabContainerStyle: {
        justifyContent: "space-evenly",
        marginHorizontal: 15
    },
    trackNameText: {
        fontSize: FontSize.NORMAL,
        color: Color.WHITE,
        width: ScreenWidth / 2
    },
    trackArtistText: {
        color: Color.WHITE,
        width: ScreenWidth / 2
    },
    loaderContainerStyle: {
        height: ScreenHeight / 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lodingText: {
        color: Color.WHITE,
        marginTop: 15,
        fontSize: 16
    }
})