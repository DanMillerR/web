import { useEffect, useState } from 'react'
import { useLocalConfig } from 'ctx'
import { useUser } from '.'
import { useGoToAcc } from './useGoToAcc'

// loading user (and return it's state)
export const useUserLoad = () => {
  const { signInRequired, emailVerificationRequired, additionalRequiredProps } =
    useLocalConfig().user
  const [user, userData, { loading, error }, { dError, dLoading }] = useUser()
  const goToAcc = useGoToAcc()
  const [state, setState] = useState('LOADING')

  useEffect(() => {
    // user load handling
    if (loading) return setState('LOADING')
    if (error) return setState('ERROR')

    // "account required" protection
    const isSignOutPage = location.pathname != '/sign-out'
    const isToken = new URL(location.href).searchParams.get('acc-token')
    const isNoUser = !loading && !error && !user
    if (isSignOutPage && !isToken && signInRequired && isNoUser)
      return goToAcc()

    if (user) {
      // "email verification required" protection
      if (emailVerificationRequired && !user.emailVerified)
        return setState('VER')

      // data load handing
      if (dLoading) return setState('LOADING')
      if (dError) return setState('ERROR')

      // "additonal props required" protection
      if (userData && additionalRequiredProps[0])
        for (const p of additionalRequiredProps)
          if (!(p in userData)) return setState('INFO')
    }

    // if all tests are passed, reset, if not reseted
    state && setState('')
  }, [user, loading, error, userData, dError, dLoading])

  return state
}
