import { Box, BoxProps } from '@mui/material'

export const Flex = ({
    clmn,
    ...props
}: Partial<Record<'clmn', boolean>> & BoxProps) => (
    <Box
        {...props}
        sx={{
            ...props.sx,
            display: 'flex',
            ...(clmn ? { flexDirection: 'column' } : {}),
        }}
    />
)
