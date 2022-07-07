import { useContext, createContext } from 'react'
import { AnyObj, EmptyObj } from 'types'
import { getDefaultCustomProvider } from './customProviders/Default'
import { CustomProvider, GetCustomUseContext, WrapperProvider } from './types'

// T - value, P extends AnyObj - CustomProvider props, CP - custom useContext props
export const genContext = <
    T,
    P extends AnyObj = EmptyObj,
    CP extends AnyObj = EmptyObj
>(
    defaultValue: T,
    CustomProvider: CustomProvider<T, P> = getDefaultCustomProvider<T>(
        defaultValue
    ) as CustomProvider<T, P>,
    getCustomUseContext?: GetCustomUseContext<T, CP>
): [ReturnType<GetCustomUseContext<T, CP>>, WrapperProvider<P>] => {
    const context = createContext(defaultValue)

    const useContextDefaultHook = <ST extends T = T>() =>
        useContext(context) as ST

    const _useContext = getCustomUseContext
        ? getCustomUseContext(context)
        : useContextDefaultHook

    const WrapperProvider: WrapperProvider<P> = (p) => (
        <CustomProvider {...p} RealProvider={context.Provider} />
    )

    return [_useContext, WrapperProvider]
}

export * from './customProviders'
