import { Button } from '@mui/material'
import { useLocalConfig } from 'ctx'
import { auth } from 'fb'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export const SignOut = () => {
  const { replace } = useRouter()
  const { user } = useLocalConfig()

  const signOutHandler = () => {
    if (user.signInRequired) {
      replace('/sign-out')
      // todo: catch
    } else signOut(auth)
  }

  return <Button onClick={signOutHandler}>(T) LOGOUT</Button>
}
