import { User } from 'firebase/auth'
import { useEffect } from 'react'
import { useLocalConfig } from 'ctx'

// return user's data
export const useUser = (): [
    { u: User; uLoad: boolean; uErr: Error },
    {
        ud: {
            name: string
            email: string
            password: string
        }
        udLoad: boolean
        udErr: Error
    }
] => {
    // @ts-ignore
    return [{}, {}]
}

// manages, what to do with user
export const useAccounts = () => {
    const {
        signInRequired,
        emailVerificationRequired,
        additionalRequiredProps,
    } = useLocalConfig().user
    const [{ u, uLoad, uErr }, { ud, udErr, udLoad }] = useUser()

    useEffect(() => {
        if (uLoad) return // todo: showuserLoadingCaution()
        if (uErr) return // todo: showUserErrorCaution()

        if (signInRequired && !u) return // todo: redirectToSignIn()

        if (u) {
            if (emailVerificationRequired && !u.emailVerified) return // todo: showEmailVerificationCaution()

            if (additionalRequiredProps[0]) {
                if (udErr) return // todo: showUserDataErrorCaution()
                if (udLoad) return // todo: showUserDataLoadingCaution()

                for (const additionalRequiredProp of additionalRequiredProps)
                    if (
                        !additionalRequiredProps.includes(
                            additionalRequiredProp
                        )
                    )
                        return // todo: showAdditionalInformationCaution()
            }
        }
    }, [u, uLoad, uErr, ud, udErr, udLoad])
}
