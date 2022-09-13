import { PropsWithChildren } from 'react'
import { EmptyObj } from 'types'
import { CustomProvider } from '../types'

export const staticValue = <T,>(value: T) => {
  const CustomProviderWithStaticValue: CustomProvider<
    T,
    PropsWithChildren<EmptyObj>
  > = ({ RealProvider, children }) => <RealProvider {...{ value, children }} />

  return CustomProviderWithStaticValue
}
