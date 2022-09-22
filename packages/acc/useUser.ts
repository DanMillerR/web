import { auth, db } from 'fb'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import { UserData } from './types'
import { User as FbUser } from 'firebase/auth'
import assign from 'object-assign-deep'

// todo?????: every unexisting property of user and userData is any
// return user's data

type User = InterfaceToType<FbUser>

type RU<U> = U extends never ? User : { defaultValue?: true } & User
type RD<D> = D extends never ? UserData : { defaultValue?: true } & UserData

export const useUser = <U extends never | User, D extends never | UserData>(
  defaultValue?: PartialRecursively<{
    user: U
    data: D
  }>
): [
  RU<U>,
  RD<D>,
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
    user ||
      ((defaultValue && {
        defaultValue: true,
        ...(defaultValue?.user as User),
      }) as RU<U>),
    assign({}, defaultValue?.data, data) || {
      defaultValue: true,
      ...(defaultValue?.data as UserData),
    },
    { loading, error },
    { dLoading, dError },
  ]
}
