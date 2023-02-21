import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'

import { useFonts, Poppins_700Bold, Poppins_400Regular_Italic, Poppins_300Light } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

import { getCurrentDate } from '../utils/date'
import { COLORS } from '../constants';

const Header = () => {

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
                    <View style={styles.nextPrayerContainer}>
                        <Text style={{ fontFamily: 'Poppins_300Light', color: COLORS.white, fontSize: 17, marginLeft: 30, marginBottom: 5 }}>Next Prayer</Text>
                        <Text style={{ fontFamily: 'Poppins_700Bold', color: COLORS.white, fontSize: 25, marginLeft: 30 }}>Isha</Text>
                        <Text style={{ alignSelf: 'flex-end', position: 'absolute', right: 30, bottom: 15, fontFamily: 'Poppins_400Regular_Italic', color: COLORS.white, fontSize: 20 }}>1m 30s</Text>
                    </View>
                </ImageBackground>
            </View>


        )
    }
}

export default Header

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
    nextPrayerContainer: {
        top: 220,
        left: '12.5%',
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'start',
        backgroundColor: COLORS.lgreen,
        width: '75%',
        height: 80,
        borderRadius: 30,
    }
})