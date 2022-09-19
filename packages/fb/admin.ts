import admin from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'
import { getApp } from 'firebase-admin/app'
import serviceAccount from './serviceAccountKey.json'

if (!getApp())
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as AnyObj),
  })

export const db = getFirestore(),
  auth = getAuth()
