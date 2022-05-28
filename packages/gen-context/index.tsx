import {
    Provider,
    ComponentType,
    Context,
    PropsWithChildren,
    useContext,
    createContext,
} from 'react'

type PropsWithRealProviders<T, P> = Record<'RealProvider', Provider<T>> & P

type CustomProvider<T, P> = ComponentType<
    PropsWithChildren<PropsWithRealProviders<T, P>>
>

type GetCustomUseContext<T> = (
    context: Context<T>
) => <ST extends T = T>() => ST

type WrapperProvider<P> = (p: PropsWithChildren<P>) => JSX.Element

export const genContext = <T, P>(
    CustomProvider: CustomProvider<T, P>,
    getCustomUseContext: GetCustomUseContext<T>,
    defaultValue: T
): [ReturnType<GetCustomUseContext<T>>, WrapperProvider<P>] => {
    const context = createContext(defaultValue)

    const defaultMyUseContext = <ST extends T = T>() =>
        useContext(context) as ST

    const myUseContext = getCustomUseContext(context) || defaultMyUseContext

    const WrapperProvider: WrapperProvider<P> = (p) => (
        <>
            adf
            <CustomProvider {...p} RealProvider={context.Provider} />
        </>
    )

    return [myUseContext, WrapperProvider]
}
