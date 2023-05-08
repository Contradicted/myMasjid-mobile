import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Separator from '../components/Separator';

import { auth } from '../utils/firebase';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';

const Login = () => {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('yes');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSignInWithGoogle = () => {

        const provider = new GoogleAuthProvider();

        signInWithRedirect(auth, provider)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    if (fontsLoaded) {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={styles.textHeading}>
                    <Text style={styles.heading}>Welcome Back!</Text>
                    <Text style={styles.subText}>Hello again, you've been missed</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        placeholder='Enter your email'
                        placeholderTextColor='#ddd'
                        style={styles.input}
                        autoCapitalize={false}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder='Enter your password'
                        placeholderTextColor='#ddd'
                        style={[styles.input, styles.inputPassword]}
                        value={password}
                        autoCapitalize={false}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 70, flexDirection: 'row', alignItems: 'center' }}>
                    <Separator />
                    <Text style={styles.sepText}>Or Login With</Text>
                    <Separator />
                </View>

                <TouchableOpacity style={styles.googleContainer} onPress={handleSignInWithGoogle}>
                    <View style={styles.google}>
                        <Image
                            source={require('../assets/images/google-icon.png')}
                            fadeDuration={0}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={styles.googleText}>Google</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.footer}>Don't have an account? <Text style={[styles.footer, { color: '#3EA86A' }]}>Sign up</Text></Text>
            </KeyboardAvoidingView>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textHeading: {
        marginTop: 100,
        marginBottom: 100,
        textAlign: 'center',
    },
    heading: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'Poppins_700Bold'
    },
    subText: {
        textAlign: 'center',
        color: '#EFEFEF',
        fontSize: 15
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
        marginBottom: 120,
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