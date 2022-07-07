import { Provider, ComponentType, Context, PropsWithChildren } from 'react'
import { AnyObj, EmptyObj } from 'types'

export type PropsWithRealProviders<T, P extends AnyObj = EmptyObj> = Record<
    'RealProvider',
    Provider<T>
> &
    P
export type WrapperProvider<P extends AnyObj = EmptyObj> = (
    p: PropsWithChildren<P>
) => JSX.Element

export type CustomProvider<T, P extends AnyObj = EmptyObj> = ComponentType<
    PropsWithChildren<PropsWithRealProviders<T, P>>
>
export type GetCustomUseContext<T, CP> = (
    context: Context<T>
) => <ST extends T = T>(p?: CP) => ST
