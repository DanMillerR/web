import { User } from 'firebase/auth'

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
    return [
        // @ts-ignore
        {},
        {
            // @ts-ignore
            tasks: {
                a: {
                    id: 'a',
                    title: 'x',
                    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3G5corsUR1HRwSr0aDwxMgHaFJ%26pid%3DApi&f=1',
                    text: 'afsdf',
                },
            },
        },
    ]
}
