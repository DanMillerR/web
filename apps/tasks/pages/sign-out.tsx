import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from 'fb'
import { useLoadings } from 'loadings'

const SignOut = () => {
  const { error } = useLoadings()
  const [signedOut, setSignedOut] = useState(false)

  useEffect(() => {
    // todo: catch
    signOut(auth)
      .then(() => setSignedOut(true))
      .catch(error)
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
