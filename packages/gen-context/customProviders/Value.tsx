import { PropsWithChildren } from 'react'
import { PropsWithRealProviders } from '../types'

type Value<T> = { value: T }

export const getCustomProviderWithValueArg = <T,>() => {
  const CustomProviderWithValueArg = ({
    RealProvider,
    value,
    children,
  }: PropsWithRealProviders<PropsWithChildren<Value<T>>>) => (
    <RealProvider value={value}>{children}</RealProvider>
  )

  return CustomProviderWithValueArg
}
