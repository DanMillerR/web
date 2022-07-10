import { PropsWithChildren } from 'react'
import { PropsWithRealProviders } from '../types'

type Value<T> = { value: T }

export const getCustomProviderWithValueArg =
  <T,>() =>
  ({
    RealProvider,
    value,
    children,
  }: PropsWithRealProviders<PropsWithChildren<Value<T>>>) =>
    <RealProvider value={value}>{children}</RealProvider>
