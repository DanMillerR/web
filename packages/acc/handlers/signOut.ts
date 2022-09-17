import { signOut as signOutFirebase } from 'firebase/auth'
import { useLocalConfig } from 'ctx'
import { auth } from 'fb'
import { useRouter } from 'next/router'
import { useLoadings } from 'loadings'

export const useSignOut = () => {
  const { error } = useLoadings()
  const { replace } = useRouter()
  const { user } = useLocalConfig()

  return () => {
    if (user.signInRequired) {
      replace('/sign-out').catch(error)
      // todo: catch
    } else signOutFirebase(auth).catch(error)
  }
}
