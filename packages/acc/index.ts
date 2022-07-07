import { User } from 'firebase/auth'

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
