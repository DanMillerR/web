import { SvgIconComponent } from '@mui/icons-material'
import { VK, Telegram } from 'ui/icons'
import { Reddit } from '@mui/icons-material'

export type SocialNetworkProps = {
  text: string
  Icon: SvgIconComponent
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
