import { Box, BoxProps, Container, ContainerProps } from '@mui/material'
import { containerMaxWidth } from 'cnfg'

export const BlockCover = ({
    children,
    containerProps,
    ...props
}: BoxProps & { containerProps: ContainerProps }) => (
    <Box {...props}>
        <Container {...containerProps} maxWidth={containerMaxWidth}>
            {children}
        </Container>
    </Box>
)
