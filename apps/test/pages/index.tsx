import { genContext } from 'gen-context'
import { useContext } from 'react'

const [useAlert, AlertProvider] = genContext<
    number,
    {
        phrase: 'HI' | 'BYE'
    },
    {
        power: number
    }
>(
    ({ RealProvider, phrase, children }) => (
        <div style={{ background: phrase == 'BYE' ? '#f99' : '#99f' }}>
            <RealProvider value={10 + 2}>{children}</RealProvider>
        </div>
    ),
    (context) =>
        ({ power }) => {
            const val = useContext(context)

            return val ** power
        },
    10
)

const A = () => {
    const value = useAlert({ power: 3 })

    return <h1>{value}</h1>
}

const Index = () => (
    <>
        <A />
        <AlertProvider phrase="BYE">
            <A />
        </AlertProvider>
    </>
)

export default Index
