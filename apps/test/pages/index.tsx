import { genContext } from 'gen-context'
import { useContext } from 'react'

const [useAlert, AlertProvider] = genContext<
    number,
    {
        arg1: number
    }
>(
    ({ RealProvider, arg1, children }) => <div>{children}</div>,
    (context) => {
        return <ST extends number = number>() => {
            const val = useContext(context)

            return (val + 1) as ST
        }
    },
    10
)

const A = () => {
    const value = useAlert()

    return <h1>A{value}</h1>
}

const Index = () => () =>
    (
        <>
            dfasdf
            <A />
            <AlertProvider arg1={20}>
                <A />
            </AlertProvider>
        </>
    )

export default Index
