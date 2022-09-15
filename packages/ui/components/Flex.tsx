import { Box, BoxProps } from '@mui/material'

export const Flex = ({
  clmn,
  aic,
  ...props
}: Partial<Record<'clmn' | 'aic', boolean>> & BoxProps) => (
  <Box
    {...props}
    sx={{
      ...props.sx,
      display: 'flex',
      ...(clmn ? { flexDirection: 'column' } : {}),
      ...(aic ? { alignItems: 'center' } : {}),
    }}
  />
)
