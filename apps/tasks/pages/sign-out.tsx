import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from 'fb'
import { useLoadings } from 'loadings'
import { useTranslation } from 'next-i18next'
import { ACCOUNT_ENTRY } from 'cnfg/namespaces'

const SignOut = () => {
  const { t } = useTranslation(ACCOUNT_ENTRY)
  const { error } = useLoadings()
  const [signedOut, setSignedOut] = useState(false)

  useEffect(() => {
    // todo: catch
    signOut(auth)
      .then(() => setSignedOut(true))
      .catch(error)
  }, [])

  return <>{signedOut ? t('signed-out') : t('signed-out-sign-in-required')}</>
}

export default SignOut
