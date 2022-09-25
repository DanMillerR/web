import { auth, db } from 'fb'
import { PropsWithChildren, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import { UserData } from './types'
import { User as FbUser } from 'firebase/auth'
import { genContext } from 'gen-context'

// todo?????: every unexisting property of user and userData is any
// return user's data

type User = InterfaceToType<FbUser>

type R = [
  User,
  UserData,
  { loading: boolean; error: Error | undefined },
  { dLoading: boolean; dError: Error | null }
]

export const [useUser, UserProvider] = genContext<
  R,
  PropsWithChildren<EmptyObj>
>({
  Provider: ({ RealProvider, children }) => {
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
      if (user)
        onSnapshot(
          doc(db, 'users/' + user.uid),
          (snap) =>
            snap.exists() &&
            setData({
              data: snap.data() as UserData,
              dLoading: false,
              dError: null,
            })
        )
    }, [user])

    return (
      <RealProvider
        value={[
          // todo????: no assign, cuz "too many recursions"
          user as User,
          data as UserData,
          { loading, error },
          { dLoading, dError },
        ]}
      >
        {children}
      </RealProvider>
    )
  },
})
