import { auth, db } from 'fb'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import { UserData } from './types'
import { User } from 'firebase/auth'
import assign from 'object-assign-deep'

// todo?????: every unexisting property of user and userData is any
// return user's data
export const useUser = (
  defaultValue?: PartialRecursively<{
    user: InterfaceToType<User>
    data: UserData
  }>
): [
  { defaultValue?: true } & User,
  { defaultValue?: true } & UserData,
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
      onSnapshot(doc(db, 'users/' + user.uid), (snap) => {
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

  return [
    // todo????: no assign, cuz "too many recursions"
    user || {
      defaultValue: true,
      ...(defaultValue?.user as User),
    },
    assign({}, defaultValue?.data, data) || {
      defaultValue: true,
      ...(defaultValue?.data as UserData),
    },
    { loading, error },
    { dLoading, dError },
  ]
}
