import * as config from 'cnfg'
import { genContext } from 'gen-context'
import { PropsWithChildren } from 'react'
import assign from 'object-assign-deep'

export type LocalConfigValue = PartialRecursively<typeof config>

export const [useLocalConfig, LocalConfig] = genContext<
  typeof config,
  PropsWithChildren<{
    value?: LocalConfigValue
  }>
>({
  defaultValue: config,
  provider: ({ value, RealProvider, children }) => (
    <RealProvider value={assign({}, config, value)}>{children}</RealProvider>
  ),
})
