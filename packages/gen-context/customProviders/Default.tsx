import { ComponentType, PropsWithChildren } from 'react'
import { PropsWithRealProviders } from '../types'

type DefaultCustomProvider<T> = ComponentType<
  PropsWithRealProviders<T, PropsWithChildren<T>>
>

// sends it's value from arg of fn
export const getDefaultCustomProvider =
  <T,>(val: T): DefaultCustomProvider<T> =>
  ({ RealProvider, children }) =>
    <RealProvider value={val}>{children}</RealProvider>
