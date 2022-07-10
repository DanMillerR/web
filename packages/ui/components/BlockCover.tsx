import { Box, BoxProps, Container, ContainerProps } from '@mui/material'
import { CONTAINER_MAX_WIDTH } from 'cnfg'

export const BlockCover = ({
  children,
  containerProps,
  ...props
}: BoxProps & { containerProps?: Omit<ContainerProps, 'maxWidth'> }) => (
  <Box {...props}>
    <Container {...containerProps} maxWidth={CONTAINER_MAX_WIDTH}>
      {children}
    </Container>
  </Box>
)
