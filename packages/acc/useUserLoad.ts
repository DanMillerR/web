import { useEffect, useState } from 'react'
import { useLocalConfig } from 'ctx'
import { useUser } from '.'
import { useRequireUser } from './useRequireUser'

// manages, what to do with user
export const useUserLoad = () => {
  const { signInRequired, emailVerificationRequired, additionalRequiredProps } =
    useLocalConfig().user
  const [u, ud, { loading, error }, { dError, dLoading }] = useUser()
  const requireUser = useRequireUser()
  const [r, sr] = useState('')

  useEffect(() => {
    if (loading) return sr('LOADING')
    if (error) return sr('ERROR')

    if (signInRequired && !u) {
      requireUser()
      return
    }

    if (u) {
      if (emailVerificationRequired && !u.emailVerified) return sr('VER')

      if (additionalRequiredProps[0]) {
        if (dError) return sr('LOADING')
        if (dLoading) return sr('ERROR')

        for (const additionalRequiredProp of additionalRequiredProps)
          if (!additionalRequiredProps.includes(additionalRequiredProp))
            return sr('INFO')
      }
    }
  }, [u, loading, error, ud, dError, dLoading])

  return r
}
