import { FC, PropsWithChildren } from 'react'
import { Box, Typography } from '@mui/material'

export const TabPanel: FC<
  PropsWithChildren<{
    index: number
    value: number
  }>
> = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
)
