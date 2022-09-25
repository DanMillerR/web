import { Reddit, SvgIconComponent } from '@mui/icons-material'
import { VK, Telegram } from 'ui/icons'
import { SvgIcon } from '@mui/material'

export type SocialNetworkProps = {
  text: string
  Icon: SvgIconComponent | typeof SvgIcon
  href: string
}

export const socials: SocialNetworkProps[] = [
  {
    text: 'VK',
    Icon: VK,
    href: 'https://example.com/1',
  },
  {
    text: 'reddit',
    Icon: Reddit,
    href: 'https://example.com/2',
  },
  {
    text: 'telegram',
    Icon: Telegram,
    href: 'https://example.com/3',
  },
]
