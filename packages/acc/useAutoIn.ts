import axios from 'axios'
import { url } from 'cnfg/acc'
import { auth } from 'fb'
import { signInWithCustomToken } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
// TODO: CATCH
const useGetToken = () => {
  const { replace, query } = useRouter()

  return () =>
    axios('/api/in').then(({ data: { token } }) => {
      const returnUrl = new URL(query['return-url'] as string)

      if (token) {
        returnUrl.searchParams.set('acc-token', token)
        replace(returnUrl)
      }
    })
}

const useSignInWithToken = () => {
  const { replace, query } = useRouter()

  return () => {
    const token = query['acc-token'] as string

    if (token) {
      const path = new URL(location.href)
      path.searchParams.delete('return-url')
      path.searchParams.delete('acc-token')
      signInWithCustomToken(auth, token).then(() => replace(path))
    }
  }
}

export const useAutoIn = () => {
  const getToken = useGetToken()
  const signInWithToken = useSignInWithToken()

  useEffect(() => {
    if (location.origin === new URL(url).origin) getToken()
    else signInWithToken()
  }, [])
}
