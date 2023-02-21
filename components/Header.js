import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'

import { useFonts, Poppins_700Bold, Poppins_400Regular_Italic } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

import { getCurrentDate } from '../utils/date'

const Header = () => {

    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular_Italic
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
                        <Image source={require('../assets/images/mosqueLogo.png')} />
                        <Text style={{
                            color: 'white',
                            fontFamily: 'Poppins_700Bold',
                            fontSize: 25,
                            marginBottom: 3
                        }}
                        >{getCurrentDate}</Text>
                        <Text style={{
                            fontFamily: 'Poppins_400Regular_Italic',
                            color: 'white',
                            fontSize: 18
                        }}
                        >12 Rabi 1444</Text>
                    </View>
                </ImageBackground>
            </View>


        )
    }
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 250,
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
    }
})