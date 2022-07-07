import * as config from 'cnfg'
import { genContext, getCustomProviderWithValueArg } from 'gen-context'
import { PropsWithChildren } from 'react'
import { PropsWithRealProviders } from 'gen-context/types'

export const [useLocalConfig, LocalConfig] = genContext<
    typeof config,
    PropsWithRealProviders<PropsWithChildren<{ value: typeof config }>>
>(config, getCustomProviderWithValueArg<typeof config>())
