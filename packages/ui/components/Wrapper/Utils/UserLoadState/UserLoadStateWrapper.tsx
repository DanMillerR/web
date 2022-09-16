import { PropsWithChildren } from 'react'
import { Flex } from '../../../Flex'
import { Header } from '../../Header'

export const UserLoadStateWrapper = ({
  children,
}: PropsWithChildren<EmptyObj>) => {
  return (
    <Flex
      sx={{
        height: '100vh',
      }}
      clmn
    >
      <Header />
      <Flex aic sx={{ flexGrow: 1, justifyContent: 'center' }}>
        {children}
      </Flex>
    </Flex>
  )
}
