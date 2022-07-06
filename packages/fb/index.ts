import { getApp, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBuck,
    messagingSenderId: process.env.messagingSe,
    appId: process.env.appId,
})

export const auth = getAuth(),
    db = getFirestore(),
    storage = getStorage()
