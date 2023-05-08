import AsyncStorage from '@react-native-async-storage/async-storage'
import { getApp, getApps, initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native'

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyD660vvDwfoldeVpjMJIm5A9vpWQHphBYs",
    authDomain: "mymasjid-f1a53.firebaseapp.com",
    projectId: "mymasjid-f1a53",
    storageBucket: "mymasjid-f1a53.appspot.com",
    messagingSenderId: "78451323887",
    appId: "1:78451323887:web:99e9808a9797ea061dbc1a"
};

// Initialise Firebase app
const app = initializeApp(firebaseConfig, 'mobile')

// Initialise Auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})