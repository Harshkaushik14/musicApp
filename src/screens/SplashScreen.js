import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Dimensions, Image, SafeAreaView, StatusBar } from 'react-native';
import AppIcon from "../assets/musicAppIcon.png";

const SplashScreen = () => {

    // Dimensions to get device width and height to make it responsive
    const ScreenWidth = Dimensions.get('window').width;
    const ScreenHeight = Dimensions.get('window').height;


    // useNavigation for navigating from one screen to another
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("HomeScreen")
        }, 5000);
    },[])

    return (
        <SafeAreaView style={{ justifyContent: "center", backgroundColor: "#fff", alignItems: "center", height: ScreenHeight, width: ScreenWidth }}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                barStyle="dark-content" />
            <Image style={{ height: ScreenHeight / 6, width: ScreenWidth / 2.8 }} source={AppIcon} />
        </SafeAreaView>
    )
}

export default SplashScreen

