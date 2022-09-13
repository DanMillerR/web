import axios from 'axios'
import { url } from 'cnfg/acc'
import { auth } from 'fb'
import { signInWithCustomToken } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUser } from './useUser'
// TODO: CATCH
const useGetToken = () => {
  const { replace } = useRouter()
  const [user, userData] = useUser()

  return () => {
    const isDataLoaded = user && userData

    if (isDataLoaded) {
      const url = '/api/in?uid=' + user.uid + '&password=' + userData.password

      axios(url).then(({ data: { token } }) => {
        if (!token) return

        const returnUrl = new URL(
          new URL(location.href).searchParams.get('return-url') as string
        )

        returnUrl.searchParams.set('acc-token', token)
        replace(returnUrl)
      })
    }
  }
}

const useSignInWithToken = () => {
  const { replace } = useRouter()

  return () => {
    const token = new URL(location.href).searchParams.get('acc-token')

    if (token) {
      const path = new URL(location.href)

      path.searchParams.delete('return-url')
      path.searchParams.delete('acc-token')

      signInWithCustomToken(auth, token).then(() => replace(path))
    }
  }
}

export const useManageAccToken = () => {
  const getToken = useGetToken()
  const signInWithToken = useSignInWithToken()
  const [user, userData] = useUser()

  useEffect(() => {
    if (location.origin === new URL(url).origin) getToken()
    else signInWithToken()
  }, [user, userData])
}
