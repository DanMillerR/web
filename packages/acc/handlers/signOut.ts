import { signOut as signOutFirebase } from 'firebase/auth'
import { useLocalConfig } from 'ctx'
import { auth } from 'fb'
import { useRouter } from 'next/router'

export const useSignOut = () => {
  const { replace } = useRouter()
  const { user } = useLocalConfig()

  return () => {
    if (user.signInRequired) {
      replace('/sign-out')
      // todo: catch
    } else signOutFirebase(auth)
  }
}
