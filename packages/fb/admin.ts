import admin from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'
import { getApp } from 'firebase-admin/app'

if (!getApp())
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.ADMIN_APP_CONFIG as string)
    ),
  })

export const db = getFirestore(),
  auth = getAuth()
