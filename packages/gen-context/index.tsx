import { useContext, createContext, Context, ComponentType } from 'react'
import { CustomProvider, CustomUseConfig } from './types'

export const genContext = <T, WP>({
  defaultValue,
  provider: CustomProvider,
  useContext: customUseContext,
}: {
  defaultValue: T
  provider: CustomProvider<T, WP>
  useContext?: CustomUseConfig<T>
}): [ReturnType<CustomUseConfig<T>>, ComponentType<WP>] => {
  const context = createContext(defaultValue)

  const useContextDefaultHook = () => useContext(context)

  const useGennedContext = customUseContext
    ? customUseContext(context)
    : useContextDefaultHook

  const WrapperProvider = (p: WP) => (
    <CustomProvider {...p} RealProvider={context.Provider} />
  )

  return [useGennedContext, WrapperProvider]
}

export * from './customProviders'
