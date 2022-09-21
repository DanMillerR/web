import admin from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'
import { ServiceAccount, getApp } from 'firebase-admin/app'

if (!getApp())
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.ADMIN_APP_CONFIG as string) as ServiceAccount
    ),
  })

export const db = getFirestore(),
  auth = getAuth()
