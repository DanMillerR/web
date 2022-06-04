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

type GetCustomUseContext<T, CP> = (
    context: Context<T>
) => <ST extends T = T>(p: CP) => ST

type WrapperProvider<P> = (p: PropsWithChildren<P>) => JSX.Element

export const genContext = <T, P, CP>(
    CustomProvider: CustomProvider<T, P>,
    getCustomUseContext: GetCustomUseContext<T, CP>,
    defaultValue: T
): [ReturnType<GetCustomUseContext<T, CP>>, WrapperProvider<P>] => {
    const context = createContext(defaultValue)

    const useContextDefaultHook = <ST extends T = T>() =>
        useContext(context) as ST

    const _useContext = getCustomUseContext(context) || useContextDefaultHook

    const WrapperProvider: WrapperProvider<P> = (p) => (
        <CustomProvider {...p} RealProvider={context.Provider} />
    )

    return [_useContext, WrapperProvider]
}
