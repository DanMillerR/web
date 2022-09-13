import { PropsWithChildren } from 'react'
import { CustomProvider } from '../types'

export const valueArg = <T,>() => {
  const CustomProviderWithValueArg: CustomProvider<
    T,
    PropsWithChildren<{ value: T }>
  > = ({ RealProvider, value, children }) => (
    <RealProvider value={value}>{children}</RealProvider>
  )

  return CustomProviderWithValueArg
}
