import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export const Link: (
  p: MuiLinkProps & {
    href: NextLinkProps['href']
    next: Omit<NextLinkProps, 'href'>
  }
) => JSX.Element = ({ href, next, ...props }) => (
  <NextLink passHref {...{ ...next, href }}>
    <MuiLink {...props}>{props.children}</MuiLink>
  </NextLink>
)
