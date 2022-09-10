import axios from 'axios'
import { url } from 'cnfg/acc'
import { auth } from 'fb'
import { signInWithCustomToken } from 'firebase/auth'
import { useRouter } from 'next/router'

const useGetToken = () => {
  const { replace, query } = useRouter()

  axios('/api/in').then(({ data: { token } }) => {
    const returnUrl = new URL(query['return-url'] as string)

    if (token) {
      returnUrl.searchParams.set('acc-token', token)
      replace(returnUrl)
    }
  })
}

const useSignInWithToken = () => {
  const { replace, query, pathname } = useRouter()

  const path = new URL(pathname)
  path.searchParams.delete('return-url')
  path.searchParams.delete('acc-token')
  signInWithCustomToken(auth, query['acc-token'] as string).then(() =>
    replace(path)
  )
}

export const useAutoIn = () => {
  const { pathname } = useRouter()

  if (pathname.startsWith(new URL(url).origin)) useGetToken()
  else useSignInWithToken()
}
