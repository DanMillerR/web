import * as config from 'cnfg'
import { genContext } from 'gen-context'
import { PropsWithChildren } from 'react'
import assign from 'object-assign-deep'
import { PartialRecursively } from 'types'

export const [useLocalConfig, LocalConfig] = genContext<
  typeof config,
  PropsWithChildren<{
    value?: PartialRecursively<typeof config>
  }>
>({
  defaultValue: config,
  provider: ({ value, RealProvider, children }) => (
    <RealProvider value={assign({}, config, value)}>{children}</RealProvider>
  ),
})
