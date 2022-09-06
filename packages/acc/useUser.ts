import { auth, db } from 'fb'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, getDoc } from 'firebase/firestore'
import { UserData } from './types'
import { User } from 'firebase/auth'

// return user's data
export const useUser = (): [
  User | null | undefined,
  UserData | null,
  { loading: boolean; error: Error | undefined },
  { dLoading: boolean; dError: Error | null }
] => {
  const [user, loading, error] = useAuthState(auth)
  const [{ data, dLoading, dError }, setData] = useState<{
    data: UserData | null
    dLoading: boolean
    dError: Error | null
  }>({
    data: null,
    dLoading: true,
    dError: null,
  })

  useEffect(() => {
    if (user) {
      getDoc(doc(db, 'users/' + user.uid)).then((snap) => {
        if (snap.exists()) {
          setData({
            data: snap.data() as UserData,
            dLoading: false,
            dError: null,
          })
        } else {
          // todo: create user
        }
      })
    }
  }, [user])

  return [user, data, { loading, error }, { dLoading, dError }]
}
