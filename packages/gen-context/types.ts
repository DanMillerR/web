import { Provider, ComponentType, Context } from 'react'
import { EmptyObj } from 'types'

export type CustomProvider<T, WP = EmptyObj> = ComponentType<
  WP & {
    RealProvider: Provider<T>
  }
>

export type CustomUseConfig<T> = (context: Context<T>) => () => T
