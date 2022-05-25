import { Provider, ComponentType, Context, PropsWithChildren } from 'react'

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
    return []
}
