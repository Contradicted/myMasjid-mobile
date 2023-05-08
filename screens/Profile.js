import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'

const Home = () => {

    const [isSignedIn, setIsSignedIn] = useState()

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setIsSignedIn(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        backgroundColor: '#3EA86A',
        width: '70%',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center'
    },
})