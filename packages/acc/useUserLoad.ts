import { useEffect, useState } from 'react'
import { useLocalConfig } from 'ctx'
import { useUser } from '.'
import { useRequireUser } from './useRequireUser'

// manages, what to do with user
export const useUserLoad = () => {
  const { signInRequired, emailVerificationRequired, additionalRequiredProps } =
    useLocalConfig().user
  const [user, userData, { loading, error }, { dError, dLoading }] = useUser()
  const requireUser = useRequireUser()
  const [state, setState] = useState('')

  useEffect(() => {
    // user load handling
    if (loading) return setState('LOADING')
    if (error) return setState('ERROR')

    // "account required" protection
    if (signInRequired && !user) {
      requireUser()
      return
    }

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

    // if all tests are passed, reset
    setState('')
  }, [user, loading, error, userData, dError, dLoading])

  return state
}
