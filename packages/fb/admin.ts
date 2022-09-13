import admin from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'
import { getApp } from 'firebase-admin/app'

var serviceAccount = require('./serviceAccountKey.json')

if (!getApp())
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })

export const db = getFirestore(),
  auth = getAuth()
