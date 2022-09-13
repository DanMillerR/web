import { PropsWithChildren } from 'react'
import { Config, Layout } from './Layout'
import { Utils } from './Utils'
import { Props } from './Utils/Providers'

export const Wrapper = ({
  children,
  useBlockCover = true,
  localConfig,
}: PropsWithChildren<Props & Config>) => (
  <Utils {...{ localConfig }}>
    <Layout {...{ children, useBlockCover }} />
  </Utils>
)
