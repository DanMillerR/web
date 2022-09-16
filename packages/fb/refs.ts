import { USER_COLLECTION } from 'cnfg/paths/db'
import { doc } from 'firebase/firestore'
import { db } from './client'
import { User } from 'firebase/auth'

export const USER_REF = (uid: User['uid']) => doc(db, USER_COLLECTION + uid)
