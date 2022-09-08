import { Box, BoxProps, Container, ContainerProps } from '@mui/material'
import { useLocalConfig } from 'ctx'

export const BlockCover = ({
  children,
  containerProps,
  ...props
}: BoxProps & { containerProps?: Omit<ContainerProps, 'maxWidth'> }) => {
  const { CONTAINER_MAX_WIDTH } = useLocalConfig()

  return (
    <Box {...props}>
      <Container {...containerProps} maxWidth={CONTAINER_MAX_WIDTH}>
        {children}
      </Container>
    </Box>
  )
}
