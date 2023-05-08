import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Separator from '../components/Separator';

import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState()

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials);
                setIsLoggedIn(true)
            })
            .catch((error) => {
                console.log(error);
                setIsLoggedIn(false)
            })
    }

    if (fontsLoaded) {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={styles.textHeading}>
                    <Text style={styles.heading}>Create Account</Text>
                    <Text style={styles.subText}>Join our mobile community and enhance your spiritual journey with us.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        value={fullName}
                        onChangeText={text => setFullName(text)}
                        placeholder='Enter your full name'
                        placeholderTextColor='#ddd'
                        autoCapitalize={false}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholder='Enter your email'
                        placeholderTextColor='#ddd'
                        style={styles.input}
                        autoCapitalize={false}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder='Enter your password'
                        autoCapitalize={false}
                        placeholderTextColor='#ddd'
                        style={[styles.input, styles.inputPassword]}
                        secureTextEntry
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 50, flexDirection: 'row', alignItems: 'center' }}>
                    <Separator />
                    <Text style={styles.sepText}>Or Continue With</Text>
                    <Separator />
                </View>

                <View style={styles.googleContainer}>
                    <View style={styles.google}>
                        <Image
                            source={require('../assets/images/google-icon.png')}
                            fadeDuration={0}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={styles.googleText}>Google</Text>
                    </View>
                </View>

                <Text style={styles.footer}>Already have an account? <Text style={[styles.footer, { color: '#3EA86A' }]}>Sign in</Text></Text>
            </KeyboardAvoidingView>
        )
    }
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textHeading: {
        marginTop: 100,
        marginBottom: 50,
        textAlign: 'center',
        alignItems: 'center'
    },
    heading: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'Poppins_700Bold'
    },
    subText: {
        textAlign: 'center',
        color: '#EFEFEF',
        fontSize: 15,
        width: 350
    },
    inputContainer: {
        width: '80%'
    },
    label: {
        fontFamily: 'Poppins_400Regular',
        color: 'white'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 5,
        marginTop: 7,
        marginBottom: 30
    },
    inputPassword: {
        marginBottom: 10
    },
    forgot: {
        textAlign: 'right',
        color: '#7F8C8D'
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#3EA86A',
        width: '100%',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins_700Bold'
    },
    sepText: {
        color: 'white',
        marginHorizontal: 30,
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
    },
    googleContainer: {
        marginTop: 20,
        marginBottom: 50,
        borderRadius: 3,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    google: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    googleText: {
        color: 'black',
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        marginLeft: 10
    },
    footer: {
        color: '#7F8C8D',
        fontSize: 15,
        fontFamily: 'Poppins_400Regular'
    }
})