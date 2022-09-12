import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from 'fb'

const SignOut = () => {
  const [signedOut, setSignedOut] = useState(false)

  useEffect(() => {
    // todo: catch
    signOut(auth).then(() => setSignedOut(true))
  }, [])

  return (
    <>
      {signedOut
        ? '(T) SIGNING OUT'
        : '(T) SIGNED OUT. IF YOU WILL GO BACK, YOU WILL LOGGED IN'}
    </>
  )
}

export default SignOut
