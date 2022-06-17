import { Box, BoxProps, Container } from '@mui/material'
import { containerMaxWidth } from 'cnfg'

export const BlockCover = ({ children, ...props }: BoxProps) => (
    <Box {...props}>
        <Container maxWidth={containerMaxWidth}>{children}</Container>
    </Box>
)
