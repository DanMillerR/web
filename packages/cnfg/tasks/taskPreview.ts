import { Variant } from '@mui/material/styles/createTypography'
import { Close, Done, Settings } from '@mui/icons-material'

export const textVariant: Variant = 'body1'
export const buttons = [
  {
    symbol: Done,
    labelKey: 'done',
    color: 'success',
  },
  {
    symbol: Close,
    labelKey: 'fail',
    color: 'error',
  },
  {
    symbol: Close,
    labelKey: 'skip',
    color: 'warning',
  },
  // {
  //   symbol: Settings,
  //   labelKey: 'settings',
  //   color: 'info',
  // },
]
