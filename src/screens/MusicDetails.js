import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet,StatusBar, Text, View } from 'react-native';
import { Color } from '../styles/Color';
import { FontSize } from '../styles/Fontsize';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const MusicDetails = (props) => {


    const trackDetails = props?.route?.params?.musicDetails;
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                animated={true}
                backgroundColor={Color.BACKGROUND_COLOR}
                barStyle="default" />

            <View style={styles.subMainContainer}>
                <Image resizeMode="cover" style={styles.trackImage} source={{ uri: trackDetails?.artworkUrl100 }} />
                <View style={styles.tableView}>
                    <Text style={styles.tableHead}>Track Name: </Text>
                    <Text style={styles.tableHeadValue}>{trackDetails?.trackName}</Text>
                </View>
                <View style={styles.tableView}>
                    <Text style={styles.tableHead}>Genre Name: </Text>
                    <Text style={styles.tableHeadValue}>{trackDetails?.primaryGenreName}</Text>
                </View>

                <View style={styles.tableView}>
                    <Text style={styles.tableHead}>Country : </Text>
                    <Text style={styles.tableHeadValue}>{trackDetails?.country}</Text>
                </View>
                <View style={styles.tableView}>
                    <Text style={styles.tableHead}>Collection : </Text>
                    <Text style={styles.tableHeadValue}>{trackDetails?.collectionName}</Text>
                </View>

                <View style={styles.tableView}>
                    <Text style={styles.tableHead}>Country : </Text>
                    <Text style={styles.tableHeadValue}>{trackDetails?.country}</Text>
                </View>

                <View style={styles.tableView}>
                    <Text style={styles.tableHead}>Kind : </Text>
                    <Text style={styles.tableHeadValue}>{trackDetails?.kind}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MusicDetails

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:Color.BACKGROUND_COLOR,
         height: ScreenHeight,
          width: ScreenWidth
    },
    subMainContainer:{
        marginTop: ScreenHeight / 12,
         justifyContent: "center",
          alignItems: "center" 
    },
    trackImage:{
        borderRadius: 6,
         height: ScreenHeight / 4,
          width: ScreenWidth / 1.8,
    },
    tableView:{
        marginTop: 30, 
        flexDirection: "row" 
    },
    tableHead:{
        color: Color.WHITE, textAlign: "left", 
        fontSize: FontSize.LARGE
    },
    tableHeadValue:{
        color: Color.WHITE, textAlign: "right", width: ScreenWidth / 2, fontSize: FontSize.NORMAL 
    }
})