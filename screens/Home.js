import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useContext } from 'react'
import dayjs from 'dayjs';

import { useFonts, Poppins_700Bold, Poppins_400Regular_Italic, Poppins_300Light } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

import { getCurrentDate } from '../utils/date'
import { COLORS } from '../constants';
import context from '../services/context'
import { getNextPrayer, getPrayerTimetable } from '../utils/prayer';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

const Home = () => {

    const { prayerData: prayerTimetable } = useContext(context)

    const prayers = getPrayerTimetable(prayerTimetable)
    const { name } = getNextPrayer(prayerTimetable)

    const nextPrayer = capitalizeFirstLetter(name.replace('Jamaah', ''))
    const nextPrayerBegins = lowerCaseFirstLetter(name.replace('Jamaah', ''))

    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular_Italic,
        Poppins_300Light
    });

    if (!fontsLoaded) {
        SplashScreen.preventAutoHideAsync();
    } else {
        SplashScreen.hideAsync();
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/images/Maskgroup.png')}
                    style={{ height: '100%', width: '100%' }}
                    imageStyle={{ borderRadius: 30, opacity: 0.12 }}
                >
                    <View style={styles.contentContainer}>
                        <Image source={require('../assets/images/mosqueLogo2.png')} style={{ width: 200, height: 100 }} />
                        <Text style={{
                            color: COLORS.white,
                            fontFamily: 'Poppins_700Bold',
                            fontSize: 25,
                            marginBottom: 3
                        }}
                        >{getCurrentDate}</Text>
                        <Text style={{
                            fontFamily: 'Poppins_400Regular_Italic',
                            color: COLORS.white,
                            fontSize: 18
                        }}
                        >12 Rabi 1444</Text>
                    </View>
                </ImageBackground>

                <View style={styles.nextPrayer}>
                    <View style={styles.row}>
                        <Text style={styles.pName}>{nextPrayer}</Text>
                        <Text style={styles.begins}>{dayjs(prayers[`${nextPrayerBegins + 'Begins'}`], 'HH:mm').format('h:mm')}</Text>
                        <View style={styles.whiteBG}>
                            <Text style={styles.iqamah}>{dayjs(prayers['fajrJamaah'], 'HH:mm').format('h:mm')}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.slideshowContainer}>
                    <View style={styles.slideshow}>
                        <Text>Hello</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        height: 260,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    contentContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextPrayer: {
        paddingHorizontal: 15,
        marginTop: 25,
    },
    row: {
        backgroundColor: '#255535',
        borderColor: COLORS.secondary,
        borderRadius: '10px',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10
    },
    pName: {
        flex: 1,
        color: COLORS.white,
        fontFamily: 'Poppins_300Light',
        fontSize: 20,
        textAlign: 'left',
    },
    begins: {
        flex: 0.7,
        fontFamily: 'Poppins_700Bold',
        color: COLORS.white,
        fontSize: 25,
    },
    whiteBG: {
        backgroundColor: '#fff',
        flex: 0.5,
        borderRadius: 10
    },
    iqamah: {
        paddingVertical: 2,
        fontFamily: 'Poppins_700Bold',
        color: '#104022',
        textAlign: 'center',
        fontSize: 25
    },
    slideshowContainer: {
        paddingHorizontal: 15,
        marginTop: 15,
        flex: 1,
    },
    slideshow: {
        backgroundColor: '#316D48',
        height: 450,
        borderColor: COLORS.secondary,
        borderRadius: '10px',
    }
})