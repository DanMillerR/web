import { Box, BoxProps, Container, ContainerProps } from '@mui/material'
import { useLocalConfig } from 'ctx'

export const BlockCover: (
  p: BoxProps & { containerProps?: Omit<ContainerProps, 'maxWidth'> }
) => JSX.Element = ({ children, containerProps, ...props }) => {
  const { CONTAINER_MAX_WIDTH } = useLocalConfig()

  return (
    <Box {...props}>
      <Container {...containerProps} maxWidth={CONTAINER_MAX_WIDTH}>
        {children}
      </Container>
    </Box>
  )
}
